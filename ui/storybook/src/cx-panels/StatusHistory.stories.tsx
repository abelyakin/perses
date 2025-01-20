import { PanelDefinition } from '@perses-dev/core';
import { Meta } from '@storybook/react';
import baseMeta, { BasePanel } from './BasePanel';

const statusHistoryChartDefinition: PanelDefinition = {
  kind: 'Panel',
  spec: {
    display: {
      name: 'Status history',
    },
    plugin: {
      kind: 'StatusHistoryChart',
      spec: {
        legend: {
          position: 'bottom',
        },
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
  title: 'StatusHistory',
  component: BasePanel,
  parameters: {
    withDataQueries: {
      props: {
        definitions: statusHistoryChartDefinition.spec.queries?.map((i) => i.spec.plugin) as unknown,
      },
    },
  },
} as Meta<typeof BasePanel>;

export const StatusHistory = BasePanel.bind({});
StatusHistory.args = {
  definition: statusHistoryChartDefinition,
};
