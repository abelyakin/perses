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
