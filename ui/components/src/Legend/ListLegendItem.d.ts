import React from 'react';
import { ListItemProps } from '@mui/material';
import { LegendItem } from './legend-model';
export type LegendItemEventOpts = {
    /**
     * Unique identifier for the legend item.
     */
    id: string;
    /**
     * Index of the row in the original data.
     */
    index: number;
};
export interface ListLegendItemProps extends Omit<ListItemProps<'div'>, 'onClick' | 'onMouseOver' | 'onMouseOut'> {
    item: LegendItem;
    index: number;
    /**
     * When true, the item is rendered differently to visually communicate it is
     * selected.
     */
    isVisuallySelected?: boolean;
    onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>, seriesId: string) => void;
    onMouseOver?: (e: React.MouseEvent, opts: LegendItemEventOpts) => void;
    onMouseOut?: (e: React.MouseEvent, opts: LegendItemEventOpts) => void;
    /**
     * When `true`, will keep labels to a single line with overflow ellipsized. The
     * full content will be shown on hover.
     *
     * When `false` or unset, will show the full label.
     */
    truncateLabel?: boolean;
}
export declare const ListLegendItem: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<ListLegendItemProps, "ref"> & React.RefAttributes<HTMLDivElement>>>;
//# sourceMappingURL=ListLegendItem.d.ts.map