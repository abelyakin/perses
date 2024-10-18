/// <reference types="react" />
import { TableCellProps as MuiTableCellProps } from '@mui/material';
import { TableCellAlignment, TableDensity } from './model/table-model';
export interface TableCellProps extends Omit<MuiTableCellProps, 'tabIndex' | 'align'> {
    density: TableDensity;
    isLastColumn: boolean;
    isFirstColumn: boolean;
    align?: TableCellAlignment;
    /**
     * Additional information to be displayed when hovering over the cell. This
     * may be the full cell value (e.g. to enable the user to see the full value
     * if it is ellipsized to fit into the space) or some other descriptive text
     * that is useful for the user.
     *
     * The hover behavior is currently managed with the `title` attribute, but this
     * may be changed to a tooltip in the future.
     */
    description?: string;
    /**
     * How the cell should behave related to focus.
     * - `trigger-focus`: the cell should be auto-focused when it renders.
     * - `focus-next`: the cell should have tabindex="0", so that it will be
     *   focused the next time someone tabs with a keyboard.
     * - `none`: the cell should have tabindex="-1", so it is not focused by
     *   keyboard interactions at this time.
     */
    focusState?: 'trigger-focus' | 'focus-next' | 'none';
    onFocusTrigger?: (e: React.MouseEvent<HTMLTableCellElement> | React.KeyboardEvent<HTMLTableCellElement>) => void;
}
export declare function TableCell({ children, density, variant, width, focusState, onFocusTrigger, isFirstColumn, isLastColumn, description, align, ...otherProps }: TableCellProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TableCell.d.ts.map