/// <reference types="react" />
export interface UseTableKeyboardNavProps {
    maxRows: number;
    maxColumns: number;
    /**
     * Function used to modify the active table cell based on the keyboard event,
     * the current position, and the default recommended next position (this value
     * will be `undefined` in cases where there is no default handler like `PageUp`
     * and `PageDown`). This can be used to modify the next position that will be
     * used and/or to handle side effects related to the new position (e.g.
     * pagination, scrolling the active cell into view).
     */
    onActiveCellChange?: (e: React.KeyboardEvent<HTMLTableElement>, currentActiveCell: TableCellPosition, defaultNextActiveCell: TableCellPosition | undefined) => TableCellPosition | undefined;
}
type TableCellPosition = {
    row: number;
    column: number;
};
/**
 * Hook for managing keyboard navigation for table components. It is intended
 * to be wrapped by implementation-specific tables to account for differences
 * like pagination, infinite scroll, and virtualization. See `useVirtualizedKeyboardNav`
 * for an example.
 */
export declare function useTableKeyboardNav({ maxRows, maxColumns, onActiveCellChange }: UseTableKeyboardNavProps): {
    activeCell: TableCellPosition;
    isActive: boolean;
    onTableKeyDown: import("react").KeyboardEventHandler<HTMLTableElement>;
    onCellFocus: (cellPosition: TableCellPosition) => void;
};
export {};
//# sourceMappingURL=useTableKeyboardNav.d.ts.map