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

import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Panel } from '@perses-dev/dashboards';
import {
  WithDataQueries,
  WithPluginRegistry,
  WithTimeRange,
  WithPluginSystemVariables,
  WithPluginSystemDatasourceStore,
  WithPluginSystemBuiltinVariables,
} from '@perses-dev/plugin-system/src/stories/shared-utils';
import { WithQueryClient, WithQueryParams } from '@perses-dev/storybook';
// Mock time range values used for mocking the time range in the system and
// mock data responses to ensure consistent results when viewing and taking
// visual testing snapshots of stories.
// Currently has a 6 hour time range.

/**
 * The panel component for the `BarChart` panel plugin.
 *
 * This component is not intended to be used directly. It is documented in storybook
 * to provide an example of what the plugin panel component looks like.
 */
const meta: Meta<typeof Panel> = {
  component: Panel,
  argTypes: {},
  decorators: [
    WithDataQueries,
    WithPluginSystemBuiltinVariables,
    WithPluginSystemVariables,
    WithPluginSystemDatasourceStore,
    WithPluginRegistry,
    WithTimeRange,
    WithQueryClient,
    WithQueryParams,
  ],
};

export default meta;

export const BasePanel: StoryFn<typeof Panel> = (args) => {
  return <Panel {...args} />;
};

export type Story = StoryObj<typeof Panel>;
