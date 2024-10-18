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

import { TableProps } from './model/table-model';
/**
 * Component used to render tabular data in Perses use cases. This component is
 * **not** intended to be a general use data table for use cases unrelated to Perses.
 *
 * **Note: This component is currently experimental and is likely to have significant breaking changes in the near future. Use with caution outside of the core Perses codebase.**
 */
export declare function Table<TableData>({ data, columns, density, checkboxSelection, onRowSelectionChange, onSortingChange, getCheckboxColor, getRowId, rowSelection, sorting, rowSelectionVariant, ...otherProps }: TableProps<TableData>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Table.d.ts.map
