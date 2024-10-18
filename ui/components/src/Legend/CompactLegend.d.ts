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

import { ListLegendItemProps } from './ListLegendItem';
import { LegendItem, SelectedLegendItemState } from './legend-model';
export interface CompactLegendProps {
    height: number;
    items: LegendItem[];
    selectedItems: SelectedLegendItemState;
    onLegendItemClick: ListLegendItemProps['onClick'];
    onItemMouseOver: ListLegendItemProps['onMouseOver'];
    onItemMouseOut: ListLegendItemProps['onMouseOut'];
}
/**
 * CompactLegend is default and used when legend items need to show side by side
 * which corresponds to when legend.position is `bottom` with a relatively small
 * number of items. The `ListLegend` is used for cases with large numbers of items
 * because it is virtualized.
 */
export declare function CompactLegend({ height, items, selectedItems, onLegendItemClick, onItemMouseOver, onItemMouseOut, }: CompactLegendProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=CompactLegend.d.ts.map
