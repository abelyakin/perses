import { TableProps } from './model/table-model';
/**
 * Component used to render tabular data in Perses use cases. This component is
 * **not** intended to be a general use data table for use cases unrelated to Perses.
 *
 * **Note: This component is currently experimental and is likely to have significant breaking changes in the near future. Use with caution outside of the core Perses codebase.**
 */
export declare function Table<TableData>({ data, columns, density, checkboxSelection, onRowSelectionChange, onSortingChange, getCheckboxColor, getRowId, rowSelection, sorting, rowSelectionVariant, ...otherProps }: TableProps<TableData>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Table.d.ts.map