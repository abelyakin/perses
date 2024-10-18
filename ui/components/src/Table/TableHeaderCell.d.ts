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