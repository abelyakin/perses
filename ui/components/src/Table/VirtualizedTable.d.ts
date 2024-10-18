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