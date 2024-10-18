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

import { ECharts as EChartsInstance } from 'echarts/core';
import { TimeSeries, TimeSeriesValueTuple } from '@perses-dev/core';
import { DatapointInfo, TimeChartSeriesMapping } from '../model';
export interface ZoomEventData {
    start: number;
    end: number;
    startIndex?: number;
    endIndex?: number;
}
/**
 * Enable dataZoom without requring user to click toolbox icon.
 * https://stackoverflow.com/questions/57183297/is-there-a-way-to-use-zoom-of-type-select-without-showing-the-toolbar
 */
export declare function enableDataZoom(chart: EChartsInstance): void;
/**
 * Restore chart to original state before zoom or other actions were dispatched
 */
export declare function restoreChart(chart: EChartsInstance): void;
export declare function clearHighlightedSeries(chart: EChartsInstance): void;
export declare function getPointInGrid(cursorCoordX: number, cursorCoordY: number, chart?: EChartsInstance): number[] | null;
export declare function batchDispatchNearbySeriesActions(chart: EChartsInstance, nearbySeriesIndexes: number[], emphasizedSeriesIndexes: number[], nonEmphasizedSeriesIndexes: number[], emphasizedDatapoints: DatapointInfo[], duplicateDatapoints: DatapointInfo[]): void;
export declare function checkCrosshairPinnedStatus(seriesMapping: TimeChartSeriesMapping): boolean;
export declare function getClosestTimestamp(timeSeriesValues?: TimeSeriesValueTuple[], cursorX?: number): number | null;
export declare function getClosestTimestampInFullDataset(data: TimeSeries[], cursorX?: number): number | null;
//# sourceMappingURL=chart-actions.d.ts.map
