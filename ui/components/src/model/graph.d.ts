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