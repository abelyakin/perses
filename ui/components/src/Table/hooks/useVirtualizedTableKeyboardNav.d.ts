/// <reference types="react" />
import { TableVirtuosoHandle } from 'react-virtuoso';
import { UseTableKeyboardNavProps } from './useTableKeyboardNav';
interface UseVirtualizedTableKeyboardNavProps extends Omit<UseTableKeyboardNavProps, 'onActiveCellChange'> {
    visibleRange: React.MutableRefObject<{
        startIndex: number;
        endIndex: number;
    }>;
    virtualTable: React.RefObject<TableVirtuosoHandle>;
    maxRows: number;
    maxColumns: number;
}
/**
 * Hook for managing keyboard navigation when using a virtualized table.
 */
export declare function useVirtualizedTableKeyboardNav({ visibleRange, virtualTable, maxRows, maxColumns, }: UseVirtualizedTableKeyboardNavProps): {
    activeCell: {
        row: number;
        column: number;
    };
    isActive: boolean;
    onTableKeyDown: import("react").KeyboardEventHandler<HTMLTableElement>;
    onCellFocus: (cellPosition: {
        row: number;
        column: number;
    }) => void;
};
export {};
//# sourceMappingURL=useVirtualizedTableKeyboardNav.d.ts.map