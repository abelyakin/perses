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
import { Column, HeaderGroup, Row } from '@tanstack/react-table';
import { TableProps } from './model/table-model';
export type VirtualizedTableProps<TableData> = Required<Pick<TableProps<TableData>, 'height' | 'width' | 'density'>> & Pick<TableProps<TableData>, 'onRowMouseOver' | 'onRowMouseOut'> & {
    onRowClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => void;
    rows: Array<Row<TableData>>;
    columns: Array<Column<TableData, unknown>>;
    headers: Array<HeaderGroup<TableData>>;
};
export declare function VirtualizedTable<TableData>({ width, height, density, onRowClick, onRowMouseOver, onRowMouseOut, rows, columns, headers, }: VirtualizedTableProps<TableData>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=VirtualizedTable.d.ts.map
