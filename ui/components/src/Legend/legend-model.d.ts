import { MouseEventHandler } from 'react';
import { LegendOptionsBase } from '@perses-dev/core';
export type LegendComponentOptions = LegendOptionsBase;
export interface LegendItem {
    id: string;
    label: string;
    color: string;
    /**
     * Additional data for the legend item. Useful for laying out additional
     * columns when using a table legend.
     */
    data?: Record<string, unknown>;
    onClick?: MouseEventHandler<HTMLElement>;
}
/**
 * State of selected items in the legend.
 * - When "ALL", all legend items are selected, but not visually highlighted.
 * - Otherwise, it is a Record that associates legend item ids with a boolean
 *   value. When the associated entry for a legend item is `true`, that item
 *   will be treated as selected and visually highlighted.
 */
export type SelectedLegendItemState = Record<LegendItem['id'], boolean> | 'ALL';
export declare function isLegendItemVisuallySelected(item: LegendItem, selectedItems: SelectedLegendItemState): boolean;
//# sourceMappingURL=legend-model.d.ts.map