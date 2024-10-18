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

import { CheckboxProps } from '@mui/material';
import { TableDensity } from './model/table-model';
export interface TableCheckboxProps extends Pick<CheckboxProps, 'checked' | 'indeterminate' | 'onChange'> {
    color?: string;
    density: TableDensity;
}
export declare function TableCheckbox({ color, density, ...otherProps }: TableCheckboxProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TableCheckbox.d.ts.map
