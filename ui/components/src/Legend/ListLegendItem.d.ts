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
