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

import React from 'react';
import { ECharts, EChartsCoreOption } from 'echarts/core';
import { SxProps, Theme } from '@mui/material';
import { EChartsTheme } from '../model';
export interface MouseEventsParameters<T> {
    componentType: string;
    seriesType: string;
    seriesIndex: number;
    seriesName: string;
    name: string;
    dataIndex: number;
    data: Record<string, unknown> & T;
    dataType: string;
    value: number | number[];
    color: string;
    info: Record<string, unknown>;
}
type OnEventFunction<T> = (params: MouseEventsParameters<T>, instance?: ECharts) => void;
declare const mouseEvents: readonly ["click", "dblclick", "mousedown", "mousemove", "mouseup", "mouseover", "mouseout", "globalout", "contextmenu"];
export type MouseEventName = (typeof mouseEvents)[number];
export interface DataZoomPayloadBatchItem {
    dataZoomId: string;
    start?: number;
    end?: number;
    startValue?: number;
    endValue?: number;
}
export interface HighlightPayloadBatchItem {
    dataIndex: number;
    dataIndexInside: number;
    seriesIndex: number;
    escapeConnect?: boolean;
    notBlur?: boolean;
}
export interface BatchEventsParameters {
    type: BatchEventName;
    batch: DataZoomPayloadBatchItem[] & HighlightPayloadBatchItem[];
}
type OnBatchEventFunction = (params: BatchEventsParameters) => void;
declare const batchEvents: readonly ["datazoom", "downplay", "highlight"];
export type BatchEventName = (typeof batchEvents)[number];
type ChartEventName = 'finished';
export type OnEventsType<T> = {
    [mouseEventName in MouseEventName]?: OnEventFunction<T>;
} & {
    [batchEventName in BatchEventName]?: OnBatchEventFunction;
} & {
    [eventName in ChartEventName]?: () => void;
};
export interface EChartsProps<T> {
    option: EChartsCoreOption;
    theme?: string | EChartsTheme;
    renderer?: 'canvas' | 'svg';
    sx?: SxProps<Theme>;
    onEvents?: OnEventsType<T>;
    _instance?: React.MutableRefObject<ECharts | undefined>;
    syncGroup?: string;
    onChartInitialized?: (instance: ECharts) => void;
}
export declare const EChart: React.MemoExoticComponent<(<T>({ option, theme, renderer, sx, onEvents, _instance, syncGroup, onChartInitialized, }: EChartsProps<T>) => import("react/jsx-runtime").JSX.Element)>;
export {};
//# sourceMappingURL=EChart.d.ts.map
