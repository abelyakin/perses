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

/// <reference types="react" />
import { TableRowProps as MuiTableRowProps } from '@mui/material';
import { TableDensity } from './model/table-model';
interface TableRowProps extends MuiTableRowProps<'div'> {
    density: TableDensity;
}
export declare const TableRow: import("react").ForwardRefExoticComponent<Omit<TableRowProps, "ref"> & import("react").RefAttributes<HTMLTableRowElement>>;
export {};
//# sourceMappingURL=TableRow.d.ts.map
