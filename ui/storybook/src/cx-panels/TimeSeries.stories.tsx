import { PanelDefinition } from '@perses-dev/core';
import { Meta } from '@storybook/react';
import baseMeta, { BasePanel } from './BasePanel';

const timeSeriesDefinition: PanelDefinition = {
  kind: 'Panel',
  spec: {
    display: {
      name: 'CPU Basic',
      description: 'Basic CPU info',
    },
    plugin: {
      kind: 'TimeSeriesChart',
      spec: {
        legend: {
          mode: 'list',
          position: 'bottom',
        },
        thresholds: {
          steps: [
            {
              color: 'green',
              value: 0,
            },
            {
              color: 'red',
              value: 0.8,
            },
          ],
        },
        yAxis: {
          format: {
            unit: 'percent-decimal',
          },
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
              datasource: {
                kind: 'PrometheusDatasource',
                name: 'PrometheusDemo',
              },
              query:
                'sum by(instance) (irate(node_cpu_seconds_total{instance="$node",job="$job", mode="system"}[$__rate_interval])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance="$node",job="$job"}[$__rate_interval])))',
            },
          },
        },
      },
      {
        kind: 'TimeSeriesQuery',
        spec: {
          plugin: {
            kind: 'PrometheusTimeSeriesQuery',
            spec: {
              datasource: {
                kind: 'PrometheusDatasource',
                name: 'PrometheusDemo',
              },
              query:
                'sum by(instance) (irate(node_cpu_seconds_total{instance="$node",job="$job", mode="user"}[$__rate_interval])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance="$node",job="$job"}[$__rate_interval])))',
            },
          },
        },
      },
      {
        kind: 'TimeSeriesQuery',
        spec: {
          plugin: {
            kind: 'PrometheusTimeSeriesQuery',
            spec: {
              datasource: {
                kind: 'PrometheusDatasource',
                name: 'PrometheusDemo',
              },
              query:
                'sum by(instance) (irate(node_cpu_seconds_total{instance="$node",job="$job", mode="iowait"}[$__rate_interval])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance="$node",job="$job"}[$__rate_interval])))',
            },
          },
        },
      },
      {
        kind: 'TimeSeriesQuery',
        spec: {
          plugin: {
            kind: 'PrometheusTimeSeriesQuery',
            spec: {
              datasource: {
                kind: 'PrometheusDatasource',
                name: 'PrometheusDemo',
              },
              query:
                'sum by(instance) (irate(node_cpu_seconds_total{instance="$node",job="$job", mode=~".*irq"}[$__rate_interval])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance="$node",job="$job"}[$__rate_interval])))',
            },
          },
        },
      },
      {
        kind: 'TimeSeriesQuery',
        spec: {
          plugin: {
            kind: 'PrometheusTimeSeriesQuery',
            spec: {
              datasource: {
                kind: 'PrometheusDatasource',
                name: 'PrometheusDemo',
              },
              query:
                "sum by(instance) (irate(node_cpu_seconds_total{instance=\"$node\",job=\"$job\", mode!='idle',mode!='user',mode!='system',mode!='iowait',mode!='irq',mode!='softirq'}[$__rate_interval])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance=\"$node\",job=\"$job\"}[$__rate_interval])))",
            },
          },
        },
      },
      {
        kind: 'TimeSeriesQuery',
        spec: {
          plugin: {
            kind: 'PrometheusTimeSeriesQuery',
            spec: {
              datasource: {
                kind: 'PrometheusDatasource',
                name: 'PrometheusDemo',
              },
              query:
                'sum by(instance) (irate(node_cpu_seconds_total{instance="$node",job="$job", mode="idle"}[$__rate_interval])) / on(instance) group_left sum by (instance)((irate(node_cpu_seconds_total{instance="$node",job="$job"}[$__rate_interval])))',
            },
          },
        },
      },
    ],
  },
};

export default {
  ...baseMeta,
  title: 'TimeSeriesChart',
  component: BasePanel,
  parameters: {
    withDataQueries: {
      props: {
        definitions: timeSeriesDefinition.spec.queries?.map((i) => i.spec.plugin) as unknown,
      },
    },
  },
} as Meta<typeof BasePanel>;

export const TimeSeries = BasePanel.bind({});
TimeSeries.args = {
  definition: timeSeriesDefinition,
};
