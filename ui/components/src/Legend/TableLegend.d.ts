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