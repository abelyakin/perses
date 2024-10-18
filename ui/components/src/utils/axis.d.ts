import type { XAXisComponentOption, YAXisComponentOption } from 'echarts';
import { FormatOptions } from '@perses-dev/core';
export declare function getFormattedAxis(axis?: YAXisComponentOption | XAXisComponentOption, unit?: FormatOptions): ({
    type: string;
    boundaryGap: (string | number)[];
    axisLabel: {
        formatter: (value: number) => string;
    };
} & (XAXisComponentOption | YAXisComponentOption | undefined))[];
/**
 * Calculate date range, used as a fallback when xAxis time range not passed as prop
 */
export declare function getDateRange(data: number[]): number;
//# sourceMappingURL=axis.d.ts.map