import { ThresholdColorPalette } from '@perses-dev/core';
import type { EChartsOption, BarSeriesOption, LineSeriesOption, GaugeSeriesOption, TitleComponentOption, ComposeOption, XAXisComponentOption, YAXisComponentOption } from 'echarts';
export interface PersesChartsTheme {
    echartsTheme: EChartsTheme;
    noDataOption: NoDataOption;
    sparkline: {
        width: number;
        color: string;
    };
    /**
     * Theming for the container that wraps a chart.
     */
    container: {
        /**
         * Padding in pixels.
         */
        padding: {
            default: number;
        };
    };
    thresholds: ThresholdColorPalette;
    /**
     * The id of the container that will have the chart tooltip appended to it.
     * By default, chart tooltip uses the body of the top-level document object.
     */
    tooltipPortalContainerId?: string;
}
export interface EChartsTheme extends EChartsOption {
    bar?: BarSeriesOption;
    line?: LineSeriesOption;
    gauge?: GaugeSeriesOption;
}
export type NoDataOption = ComposeOption<TitleComponentOption | XAXisComponentOption | YAXisComponentOption>;
//# sourceMappingURL=theme.d.ts.map