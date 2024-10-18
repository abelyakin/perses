/// <reference types="react" />
import { TableProps as MuiTableProps } from '@mui/material';
import { TableDensity } from './model/table-model';
type InnerTableProps = Omit<MuiTableProps, 'size'> & {
    density: TableDensity;
};
export declare const InnerTable: import("react").ForwardRefExoticComponent<Omit<InnerTableProps, "ref"> & import("react").RefAttributes<HTMLTableElement>>;
export {};
//# sourceMappingURL=InnerTable.d.ts.map