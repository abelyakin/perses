import { PanelDefinition } from '@perses-dev/core';
import { Meta } from '@storybook/react';
import baseMeta, { BasePanel } from './BasePanel';

const pieChartDefinition: PanelDefinition = {
  kind: 'Panel',
  spec: {
    display: {
      name: 'Pie Chart',
    },
    plugin: {
      kind: 'PieChart',
      spec: {
        calculation: 'last',
        format: {
          unit: 'decimal',
          shortValues: true,
        },
        radius: 50,
        sort: 'desc',
        mode: 'value',
        visual: {
          lineWidth: 1.25,
          areaOpacity: 0,
          pointRadius: 2.75,
          connectNulls: false,
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
  title: 'PieChart',
  component: BasePanel,
  parameters: {
    withDataQueries: {
      props: {
        definitions: pieChartDefinition.spec.queries?.map((i) => i.spec.plugin) as unknown,
      },
    },
  },
} as Meta<typeof BasePanel>;

export const PieChart = BasePanel.bind({});
PieChart.args = {
  definition: pieChartDefinition,
};
