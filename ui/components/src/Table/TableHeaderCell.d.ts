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

import { TableCellProps } from './TableCell';
import { SortDirection } from './model/table-model';
export interface TableHeaderCellProps extends TableCellProps {
    /**
     * Handler called when a sort event is triggered.
     * When specified, the header will include sorting interactions and indicators.
     */
    onSort?: ((event: unknown) => void) | undefined;
    /**
     * The current direction the header is sorted.
     */
    sortDirection?: SortDirection;
    /**
     * The next direction the header will be sorted when another sort action
     * is triggered via click/keyboard. This impacts some UI interactions (e.g.
     * the direction of the sort arrow on hover f the column is currently
     * unsorted.)
     */
    nextSortDirection?: SortDirection;
}
export declare function TableHeaderCell({ onSort, sortDirection, nextSortDirection, children, ...cellProps }: TableHeaderCellProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TableHeaderCell.d.ts.map
