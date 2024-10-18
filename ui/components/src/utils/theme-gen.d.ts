import { Theme } from '@mui/material';
import { PersesChartsTheme } from '../model';
type MuiTheme = Omit<Theme, 'components'>;
export declare function generateChartsTheme(muiTheme: MuiTheme, persesChartsThemeOverride: Partial<PersesChartsTheme>): PersesChartsTheme;
export {};
//# sourceMappingURL=theme-gen.d.ts.map