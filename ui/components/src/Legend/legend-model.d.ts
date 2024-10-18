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
