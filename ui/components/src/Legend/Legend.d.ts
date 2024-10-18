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

import { TableLegendProps } from './TableLegend';
import { LegendItem, LegendComponentOptions, SelectedLegendItemState } from './legend-model';
import { ListLegendItemProps } from './ListLegendItem';
export interface LegendProps {
    width: number;
    height: number;
    data: LegendItem[];
    options: LegendComponentOptions;
    /**
     * State of selected items in the legend.
     *
     * Selected legend item state is a controlled value that should be managed using a
     * combination of this prop and `onSelectedChange`.
     */
    selectedItems: SelectedLegendItemState;
    /**
     * Callback fired when the selected items in the legend changes.
     */
    onSelectedItemsChange: (newSelected: SelectedLegendItemState) => void;
    /**
     * Callback fired when the mouse is moved over a legend item.
     */
    onItemMouseOver?: ListLegendItemProps['onMouseOver'];
    /**
     * Callback fired when the mouse is moved out of a legend item.
     */
    onItemMouseOut?: ListLegendItemProps['onMouseOut'];
    /**
     * Props specific to legend with `mode` set to `table`.
     */
    tableProps?: Pick<TableLegendProps, 'columns' | 'onSortingChange' | 'sorting'>;
}
export declare function Legend({ width, height, options, data, selectedItems, onSelectedItemsChange, onItemMouseOver, onItemMouseOut, tableProps, }: LegendProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Legend.d.ts.map
