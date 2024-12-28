import { PanelDefinition } from '@perses-dev/core';
import { Meta } from '@storybook/react';
import baseMeta, { BasePanel } from './BasePanel';

const tableChartDefinition: PanelDefinition = {
  kind: 'Panel',
  spec: {
    display: {
      name: '',
    },
    plugin: {
      kind: 'Table',
      spec: {
        density: 'standard',
        cellSettings: [
          {
            condition: {
              kind: 'Value',
              spec: {
                value: '1',
              },
            },
            textColor: '#ffffff',
            backgroundColor: '#d82d2d',
          },
        ],
      },
    },
    queries: [
      {
        kind: 'TimeSeriesQuery',
        spec: {
          plugin: {
            kind: 'PrometheusTimeSeriesQuery',
            spec: {
              query: 'up{job=~".+"}',
            },
          },
        },
      },
    ],
  },
};

export default {
  ...baseMeta,
  title: 'TableChart',
  component: BasePanel,
  parameters: {
    withDataQueries: {
      props: {
        definitions: tableChartDefinition.spec.queries?.map((i) => i.spec.plugin) as unknown,
      },
    },
  },
} as Meta<typeof BasePanel>;

export const Table = BasePanel.bind({});
Table.args = {
  definition: tableChartDefinition,
};
