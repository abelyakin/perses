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
export interface ListLegendProps {
    items: LegendItem[];
    height: number;
    width: number;
    selectedItems: SelectedLegendItemState;
    onLegendItemClick: ListLegendItemProps['onClick'];
    onItemMouseOver: ListLegendItemProps['onMouseOver'];
    onItemMouseOut: ListLegendItemProps['onMouseOut'];
}
/**
 * ListLegend is used when legend.position is 'right' since legend items are
 * stacked. It is also used for `bottom` positioned legends when there are a
 * large number of items because it is virtualized and easier to visually scan
 * large numbers of items when there is a single item per row.
 */
export declare function ListLegend({ items, height, width, selectedItems, onLegendItemClick, onItemMouseOver, onItemMouseOut, }: ListLegendProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ListLegend.d.ts.map
