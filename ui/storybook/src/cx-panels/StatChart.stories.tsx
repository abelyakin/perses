import { PanelDefinition } from '@perses-dev/core';
import { Meta } from '@storybook/react';
import baseMeta, { BasePanel } from './BasePanel';

const statChartDefinition: PanelDefinition = {
  kind: 'Panel',
  spec: {
    display: {
      name: 'Single Stat with Sparkline',
    },
    plugin: {
      kind: 'StatChart',
      spec: {
        calculation: 'last-number',
        format: {
          unit: 'decimal',
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
                'avg(node_load15{job="node",instance=~"demo.do.prometheus.io:9100"}) /  count(count(node_cpu_seconds_total{job="node",instance=~"demo.do.prometheus.io:9100"}) by (cpu)) * 100',
            },
          },
        },
      },
    ],
  },
};

export default {
  ...baseMeta,
  title: 'StatChart',
  component: BasePanel,
  parameters: {
    withDataQueries: {
      props: {
        definitions: statChartDefinition.spec.queries?.map((i) => i.spec.plugin) as unknown,
      },
    },
  },
} as Meta<typeof BasePanel>;

export const StatChartBasic = BasePanel.bind({});
StatChartBasic.args = {
  definition: statChartDefinition,
};

export const StatChartWithSparkline = BasePanel.bind({});
StatChartWithSparkline.args = {
  definition: {
    ...statChartDefinition,
    spec: {
      ...statChartDefinition?.spec,
      plugin: {
        ...statChartDefinition?.spec?.plugin,
        spec: {
          sparkline: {},
        },
      },
    },
  },
};

export const StatChartMultiple = BasePanel.bind({});
const multipleStatChartDefinition: PanelDefinition = {
  kind: 'Panel',
  spec: {
    display: {
      name: 'Multi-Series Stat with Sparkline',
    },
    plugin: {
      kind: 'StatChart',
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
StatChartMultiple.args = {
  definition: statChartDefinition,
};
StatChartMultiple.parameters = {
  withDataQueries: {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      definitions: multipleStatChartDefinition.spec.queries?.map((i) => i.spec.plugin) as any,
    },
  },
};
