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