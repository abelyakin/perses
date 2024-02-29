// Copyright 2024 The Perses Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package ephemeraldashboard

import (
	"fmt"

	databaseModel "github.com/perses/perses/internal/api/database/model"
	apiInterface "github.com/perses/perses/internal/api/interface"
	"github.com/perses/perses/internal/api/interface/v1/ephemeraldashboard"
	"github.com/perses/perses/internal/api/interface/v1/globalvariable"
	"github.com/perses/perses/internal/api/interface/v1/variable"
	"github.com/perses/perses/internal/api/schemas"
	"github.com/perses/perses/internal/api/validate"
	"github.com/perses/perses/pkg/model/api"
	v1 "github.com/perses/perses/pkg/model/api/v1"
	"github.com/sirupsen/logrus"
)

type service struct {
	ephemeraldashboard.Service
	dao           ephemeraldashboard.DAO
	globalVarDAO  globalvariable.DAO
	projectVarDAO variable.DAO
	sch           schemas.Schemas
}

func NewService(dao ephemeraldashboard.DAO, globalVarDAO globalvariable.DAO, projectVarDAO variable.DAO, sch schemas.Schemas) ephemeraldashboard.Service {
	return &service{
		dao:           dao,
		globalVarDAO:  globalVarDAO,
		projectVarDAO: projectVarDAO,
		sch:           sch,
	}
}

func (s *service) Create(_ apiInterface.PersesContext, entity api.Entity) (interface{}, error) {
	if object, ok := entity.(*v1.EphemeralDashboard); ok {
		return s.create(object)
	}
	return nil, apiInterface.HandleBadRequestError(fmt.Sprintf("wrong entity format, attempting ephemeral dashboard format, received '%T'", entity))
}

func (s *service) create(entity *v1.EphemeralDashboard) (*v1.EphemeralDashboard, error) {
	// verify this new dashboard passes the validation
	if err := s.Validate(entity); err != nil {
		return nil, err
	}

	// Update the time contains in the entity
	entity.Metadata.CreateNow()
	if err := s.dao.Create(entity); err != nil {
		return nil, err
	}
	return entity, nil
}

func (s *service) Update(_ apiInterface.PersesContext, entity api.Entity, parameters apiInterface.Parameters) (interface{}, error) {
	if object, ok := entity.(*v1.EphemeralDashboard); ok {
		return s.update(object, parameters)
	}
	return nil, apiInterface.HandleBadRequestError(fmt.Sprintf("wrong entity format, attempting ephemeral dashboard format, received '%T'", entity))
}

func (s *service) update(entity *v1.EphemeralDashboard, parameters apiInterface.Parameters) (*v1.EphemeralDashboard, error) {
	if entity.Metadata.Name != parameters.Name {
		logrus.Debugf("name in ephemeral dashboard %q and name from the http request %q don't match", entity.Metadata.Name, parameters.Name)
		return nil, apiInterface.HandleBadRequestError("metadata.name and the name in the http path request don't match")
	}
	if len(entity.Metadata.Project) == 0 {
		entity.Metadata.Project = parameters.Project
	} else if entity.Metadata.Project != parameters.Project {
		logrus.Debugf("project in ephemeral dashboard %q and project from the http request %q don't match", entity.Metadata.Project, parameters.Project)
		return nil, apiInterface.HandleBadRequestError("metadata.project and the project name in the http path request don't match")
	}

	// verify this new dashboard passes the validation
	if err := s.Validate(entity); err != nil {
		return nil, err
	}

	// find the previous version of the ephemeral dashboard
	oldEntity, err := s.dao.Get(parameters.Project, parameters.Name)
	if err != nil {
		return nil, err
	}
	entity.Metadata.Update(oldEntity.Metadata)
	if updateErr := s.dao.Update(entity); updateErr != nil {
		logrus.WithError(updateErr).Errorf("unable to perform the update of the ephemeral dashboard %q, something wrong with the database", entity.Metadata.Name)
		return nil, updateErr
	}
	return entity, nil
}

func (s *service) Delete(_ apiInterface.PersesContext, parameters apiInterface.Parameters) error {
	return s.dao.Delete(parameters.Project, parameters.Name)
}

func (s *service) Get(_ apiInterface.PersesContext, parameters apiInterface.Parameters) (interface{}, error) {
	return s.dao.Get(parameters.Project, parameters.Name)
}

func (s *service) List(_ apiInterface.PersesContext, q databaseModel.Query, _ apiInterface.Parameters) (interface{}, error) {
	return s.dao.List(q)
}

func (s *service) Validate(entity *v1.EphemeralDashboard) error {
	projectVars, projectVarsErr := s.collectProjectVariables(entity.Metadata.Project)
	if projectVarsErr != nil {
		return apiInterface.HandleError(projectVarsErr)
	}

	globalVars, globalVarsErr := s.collectGlobalVariables()
	if globalVarsErr != nil {
		return apiInterface.HandleError(globalVarsErr)
	}

	if err := validate.DashboardSpecWithVars(entity.Spec.DashboardSpec, s.sch, projectVars, globalVars); err != nil {
		return apiInterface.HandleBadRequestError(err.Error())
	}
	return nil
}

func (s *service) collectProjectVariables(project string) ([]*v1.Variable, error) {
	if len(project) == 0 {
		return nil, nil
	}
	return s.projectVarDAO.List(&variable.Query{Project: project})
}

func (s *service) collectGlobalVariables() ([]*v1.GlobalVariable, error) {
	return s.globalVarDAO.List(&globalvariable.Query{})
}