/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
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

import { Box } from '@mui/material';
import { StatusHistoryChart, ContentWithLegend, LegendItem, useChartsTheme } from '@perses-dev/components';
import { useDataQueries, validateLegendSpec } from '@perses-dev/plugin-system';
import { merge } from 'lodash';
import { useMemo } from 'react';

interface TimeRange {
  start: string;
  end: string;
}

interface SeriesItem {
  name: string;
  values: Array<[number, number]>;
  formattedName: string;
  labels: {
    [key: string]: string;
  };
}

export interface QueryResult {
  timeRange: TimeRange;
  stepMs: number;
  series: SeriesItem[];
  metadata: {
    notices: any[];
    executedQueryString: string;
  };
}

interface HeatmapDataModel {
  legendItems: LegendItem[];
  heatmapData: Array<[number, number, number]>;
  xAxisCategories: number[];
  yAxisCategories: string[];
}

function createHeatmapDataModel(queryResults: Array<{ data: QueryResult }>, colors: string[]): HeatmapDataModel {
  if (!queryResults || queryResults.length === 0) {
    return {
      legendItems: [],
      heatmapData: [],
      xAxisCategories: [],
      yAxisCategories: [],
    };
  }

  const heatmapData: Array<[number, number, number]> = [];
  const xAxisCategories = new Set<number>();
  const yAxisCategories: string[] = [];
  const legendSet = new Set<number>();

  queryResults.forEach(({ data }) => {
    if (!data) {
      return;
    }

    data.series.forEach((item) => {
      const instance = item.formattedName;

      yAxisCategories.push(instance);

      const yIndex = yAxisCategories.length - 1;

      item.values.forEach(([time, value], xIndex) => {
        legendSet.add(value);
        heatmapData.push([xIndex, yIndex, value]);
        xAxisCategories.add(time);
      });
    });
  });

  const legendItems: LegendItem[] = Array.from(legendSet).map((value, idx) => ({
    id: `${idx}-${value}`,
    label: String(value),
    color: colors[value] || '#FFF2',
  }));

  return {
    xAxisCategories: Array.from(xAxisCategories).sort((a, b) => a - b),
    yAxisCategories,
    legendItems,
    heatmapData,
  };
}

export function StatusHistoryPanel(props: any) {
  const { spec, contentDimensions } = props;

  const legend = useMemo(() => {
    return spec.legend && validateLegendSpec(spec.legend) ? merge({}, spec.legend) : undefined;
  }, [spec.legend]);

  const chartsTheme = useChartsTheme();
  const PADDING = chartsTheme.container.padding.default;
  const { queryResults } = useDataQueries('TimeSeriesQuery');

  const { heatmapData, yAxisCategories, xAxisCategories, legendItems } = createHeatmapDataModel(
    queryResults as any,
    chartsTheme.echartsTheme.color as string[]
  );

  const contentPadding = chartsTheme.container.padding.default;
  const adjustedContentDimensions: typeof contentDimensions = contentDimensions
    ? {
        width: contentDimensions.width - contentPadding * 2,
        height: contentDimensions.height - contentPadding * 2,
      }
    : undefined;

  if (!heatmapData || heatmapData.length === 0) {
    return null;
  }

  return (
    <Box sx={{ padding: `${PADDING}px` }}>
      <ContentWithLegend
        width={adjustedContentDimensions.width}
        height={adjustedContentDimensions.height}
        legendSize={legend.size}
        legendProps={
          legend && {
            options: legend,
            data: legendItems || [],
            selectedItems: 'ALL',
            onSelectedItemsChange: () => null,
          }
        }
      >
        {({ height, width }: { width: number; height: number }) => {
          return (
            <Box sx={{ height, width }}>
              <StatusHistoryChart
                xAxisCategories={xAxisCategories}
                yAxisCategories={yAxisCategories}
                data={heatmapData}
                label={spec.label}
                width={contentDimensions.width - PADDING * 2}
                height={contentDimensions.height - PADDING * 2}
              />
            </Box>
          );
        }}
      </ContentWithLegend>
    </Box>
  );
}
