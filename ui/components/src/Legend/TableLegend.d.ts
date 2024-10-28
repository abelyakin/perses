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

import { TableProps } from '../Table';
import { LegendItem } from './legend-model';
export interface TableLegendProps extends Pick<TableProps<LegendItem>, 'sorting' | 'onSortingChange'> {
    items: LegendItem[];
    height: number;
    width: number;
    selectedItems: TableProps<LegendItem>['rowSelection'] | 'ALL';
    onSelectedItemsChange: TableProps<LegendItem>['onRowSelectionChange'];
    onItemMouseOver?: TableProps<LegendItem>['onRowMouseOver'];
    onItemMouseOut?: TableProps<LegendItem>['onRowMouseOut'];
    columns?: TableProps<LegendItem>['columns'];
}
export declare function TableLegend({ items, selectedItems: initRowSelection, onSelectedItemsChange, onItemMouseOver, onItemMouseOut, height, width, columns: additionalColumns, sorting, onSortingChange, }: TableLegendProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TableLegend.d.ts.map