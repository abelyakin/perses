// Copyright 2023 The Perses Authors
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

import { Card, CssBaseline, ThemeProvider } from '@mui/material';
import { Decorator } from '@storybook/react';
import { ChartsProvider } from '@perses-dev/components';
import { PanelHeader } from '../../../../../dashboards/src/components/Panel/PanelHeader';
import { chartsTheme, theme } from './theme';

export const WithCxThemes: Decorator = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChartsProvider chartsTheme={chartsTheme} enablePinning={true}>
        <Card
          component="section"
          sx={{
            width: 'fit-content',
            height: '100%',
            display: 'flex',
            flexFlow: 'column nowrap',
          }}
          variant="outlined"
          data-testid="panel"
        >
          <PanelHeader
            // extra={panelOptions?.extra?.({ panelDefinition: definition, panelGroupItemId })}
            id="yo"
            title="hello"
            // description={definition.spec.display.description}
            // readHandlers={readHandlers}
            // editHandlers={editHandlers}
            // links={definition.spec.links}
            sx={{ paddingX: `${chartsTheme.container.padding.default}px` }}
          />
          <Story />
        </Card>
      </ChartsProvider>
    </ThemeProvider>
  );
};
