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

import { TimeSeriesValueTuple } from '@perses-dev/core';
import { LineSeriesOption, BarSeriesOption } from 'echarts/charts';
import { LegendItem } from '../Legend';
export declare const OPTIMIZED_MODE_SERIES_LIMIT = 1000;
export type UnixTimeMs = number;
export interface GraphSeries {
    name: string;
    values: TimeSeriesValueTuple[];
    id?: string;
}
export type EChartsValues = number | null | '-';
export interface LegacyTimeSeries extends Omit<LineSeriesOption, 'data'> {
    data: EChartsValues[];
}
export type TimeChartSeriesMapping = TimeSeriesOption[];
export type TimeChartLegendItems = LegendItem[];
export type TimeSeriesOption = LineSeriesOption | BarSeriesOption;
export type EChartsDataFormat = {
    timeSeries: LegacyTimeSeries[];
    xAxis: number[];
    legendItems?: LegendItem[];
    xAxisMax?: number | string;
    rangeMs?: number;
};
export type ChartInstanceFocusOpts = {
    id?: string;
    name?: string;
};
export type ChartInstance = {
    /**
     * Highlight the series associated with the specified options.
     */
    highlightSeries: (opts: ChartInstanceFocusOpts) => void;
    /**
     * Clear all highlighted series.
     */
    clearHighlightedSeries: () => void;
};
export declare const PINNED_CROSSHAIR_SERIES_NAME = "Pinned Crosshair";
export declare const DEFAULT_PINNED_CROSSHAIR: LineSeriesOption;
export interface DatapointInfo {
    dataIndex: number;
    seriesIndex: number;
    seriesName: string;
    yValue: number;
}
//# sourceMappingURL=graph.d.ts.map
