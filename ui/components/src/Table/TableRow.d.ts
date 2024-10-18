/// <reference types="react" />
import { TableRowProps as MuiTableRowProps } from '@mui/material';
import { TableDensity } from './model/table-model';
interface TableRowProps extends MuiTableRowProps<'div'> {
    density: TableDensity;
}
export declare const TableRow: import("react").ForwardRefExoticComponent<Omit<TableRowProps, "ref"> & import("react").RefAttributes<HTMLTableRowElement>>;
export {};
//# sourceMappingURL=TableRow.d.ts.map