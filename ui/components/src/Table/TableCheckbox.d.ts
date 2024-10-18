import { CheckboxProps } from '@mui/material';
import { TableDensity } from './model/table-model';
export interface TableCheckboxProps extends Pick<CheckboxProps, 'checked' | 'indeterminate' | 'onChange'> {
    color?: string;
    density: TableDensity;
}
export declare function TableCheckbox({ color, density, ...otherProps }: TableCheckboxProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TableCheckbox.d.ts.map