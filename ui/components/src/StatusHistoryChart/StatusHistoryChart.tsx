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

import { Box } from '@mui/material';
import { formatWithTimeZone, useChartsTheme, useTimeZone } from '@perses-dev/components';
import { HeatmapChart as EChartsHeatmapChart } from 'echarts/charts';
import {
  GridComponent,
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
} from 'echarts/components';
import { EChartsCoreOption, use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { DatasetOption } from 'echarts/types/dist/shared.js';
import { useMemo } from 'react';

import { EChart } from '../EChart';

use([
  EChartsHeatmapChart,
  VisualMapComponent,
  GridComponent,
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  CanvasRenderer,
]);

export interface StatusHistoryChartProps {
  width: number;
  height: number;
  data: Array<[number, number, number]>;
  legend?: any;
  label?: boolean;
  xAxisCategories: number[];
  yAxisCategories: string[];
}

export function StatusHistoryChart(props: StatusHistoryChartProps) {
  const { width, height, data, xAxisCategories, yAxisCategories, label = false } = props;
  const { timeZone } = useTimeZone();
  const chartsTheme = useChartsTheme();

  const option: EChartsCoreOption = useMemo(() => {
    const dataset: DatasetOption[] = [];

    dataset.push({
      source: data,
      dimensions: ['x', 'y', 'value'],
    });

    const option: EChartsCoreOption = {
      tooltip: {
        position: function (point: any, params: any, dom: any, rect: any, size: any) {
          // calculate the position to avoid overflow
          const [x, y] = point;
          const { contentSize, viewSize } = size;

          const posX = x + contentSize[0] > viewSize[0] ? x - contentSize[0] : x;
          const posY = y + contentSize[1] > viewSize[1] ? y - contentSize[1] : y;

          return [posX, posY];
        },
        backgroundColor: '#FFF',
        borderColor: '#ccc',
        borderWidth: 1,
        textStyle: {
          color: '#000',
        },
        formatter: function (params: any) {
          const { data } = params;
          const [x, y, value] = data;
          const xAxisLabel = xAxisCategories[x];
          const date = xAxisLabel ? new Date(xAxisLabel) : null;
          const time = date ? formatWithTimeZone(date, 'yyyy-MM-dd HH:mm:ss', timeZone) : '';

          return `
                        <div style="padding: 5px;">
                            ${time}<br/>
                            <strong>${yAxisCategories[y]}</strong><br/>
                            ${value}<br/>
                        </div>
                    `;
        },
      },
      grid: {
        top: '5%',
        bottom: '17%',
      },
      xAxis: {
        type: 'category',
        data: xAxisCategories,
        splitArea: {
          show: true,
        },
        axisLabel: {
          formatter: function (value: number) {
            return formatWithTimeZone(new Date(Number(value)), 'HH:mm', timeZone);
          },
        },
      },
      yAxis: {
        type: 'category',
        data: yAxisCategories,
        splitArea: {
          interval: 0,
        },
      },
      visualMap: {
        show: false,
        type: 'piecewise',
        pieces: Array.isArray(chartsTheme.echartsTheme.color)
          ? chartsTheme.echartsTheme.color.map((color, idx) => ({ value: idx, color }))
          : [],
      },
      series: [
        {
          name: 'Status history',
          type: 'heatmap',
          coordinateSystem: 'cartesian2d',
          data: data,
          label: {
            show: label,
          },
          itemStyle: {
            borderWidth: 1,
            borderType: 'solid',
            borderColor: '#ffffff',
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    return option;
  }, [data, chartsTheme.echartsTheme.color, timeZone, xAxisCategories, yAxisCategories, label]);

  return (
    <Box sx={{ height: height, overflow: 'auto' }}>
      <EChart
        sx={{
          width: width,
          height: height,
        }}
        option={option}
        theme={chartsTheme.echartsTheme}
      />
    </Box>
  );
}
