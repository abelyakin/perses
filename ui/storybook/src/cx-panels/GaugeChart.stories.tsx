import { PanelDefinition } from '@perses-dev/core';
import { Meta } from '@storybook/react';
import baseMeta, { BasePanel } from './BasePanel';

const gaugeChartDefinition: PanelDefinition = {
  kind: 'Panel',
  spec: {
    display: {
      name: 'Single Gauge',
      description: 'Gauge chart with a single gauge',
    },
    plugin: {
      kind: 'GaugeChart',
      spec: {
        calculation: 'mean',
        format: {
          unit: 'percent',
        },
        thresholds: {
          steps: [
            {
              value: 20,
            },
          ],
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
              query:
                '100 - ((node_memory_MemAvailable_bytes{env="demo", instance="demo.do.prometheus.io:9100"} * 100) / node_memory_MemTotal_bytes{env="demo", instance="demo.do.prometheus.io:9100"})',
            },
          },
        },
      },
    ],
  },
};

export default {
  ...baseMeta,
  title: 'GaugeChart',
  component: BasePanel,
  parameters: {
    withDataQueries: {
      props: {
        definitions: gaugeChartDefinition.spec.queries?.map((i) => i.spec.plugin) as unknown,
      },
    },
  },
} as Meta<typeof BasePanel>;

export const Gauge = BasePanel.bind({});
Gauge.args = {
  definition: gaugeChartDefinition,
};
