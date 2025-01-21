import { PanelDefinition } from '@perses-dev/core';
import { Meta } from '@storybook/react';
import baseMeta, { BasePanel } from './BasePanel';

const barChartDefinition: PanelDefinition = {
  kind: 'Panel',
  spec: {
    display: {
      name: 'Bar chart',
    },
    plugin: {
      kind: 'BarChart',
      spec: {
        calculation: 'mean',
        format: {
          shortValues: false,
          unit: 'decimal',
        },
        sparkline: {},
      },
    },
    queries: [
      {
        kind: 'TimeSeriesQuery',
        spec: {
          plugin: {
            kind: 'PrometheusTimeSeriesQuery',
            spec: {
              query:
                'avg without (cpu)(rate(node_cpu_seconds_total{job="node",instance=~"demo.do.prometheus.io:9100",mode!="nice",mode!="steal",mode!="irq"}[5m]))',
              seriesNameFormat: '{{mode}} mode ',
            },
          },
        },
      },
    ],
  },
};

export default {
  ...baseMeta,
  title: 'BarChart',
  component: BasePanel,
  parameters: {
    withDataQueries: {
      props: {
        definitions: barChartDefinition.spec.queries?.map((i) => i.spec.plugin) as unknown,
      },
    },
  },
} as Meta<typeof BasePanel>;

export const Bar = BasePanel.bind({});
Bar.args = {
  definition: barChartDefinition,
};
