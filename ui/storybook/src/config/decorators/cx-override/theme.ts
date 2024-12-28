import { ThemeOptions } from '@mui/material';
import { CSSProperties } from 'react';
import { EChartsTheme, generateChartsTheme, getTheme, typography } from '@perses-dev/components';
import { MuiPaper } from './component-overrides/paper';
import { MuiCardHeader } from './component-overrides/card-header';
import { getPaletteOptions } from './palette';
import { text } from './palette/text';

const colors = ['#516b91', '#59c4e6', '#edafda', '#93b7e3', '#a5e7f0', '#cbb0e3'];
const ECHARTS_THEME_OVERRIDES: EChartsTheme = {
  color: colors,
  categoryAxis: {
    splitLine: {
      show: true,
    },
  },
  valueAxis: {},
  line: {},
};

const cxTypography = {
  ...typography,
  fontFamily: 'Segoe UI, Helvetica Neue, Noto Sans, sans-serif',
  h2: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '28px',
  },
  subtitle1: {
    fontSize: '10px',
    color: text?.secondary,
    fontWeight: 400,
    textTransform: 'uppercase' as CSSProperties['textTransform'],
    letterSpacing: '1px',
  },
};

const components: ThemeOptions['components'] = {
  MuiPaper,
  MuiCardHeader,
};

export const theme = getTheme('light', {
  typography: cxTypography,
  components,
  palette: getPaletteOptions,
});

const secondaryTextColor = theme.palette.text?.secondary;
const fontFamily = theme.typography.fontFamily;

export const chartsTheme = generateChartsTheme(theme, {
  echartsTheme: ECHARTS_THEME_OVERRIDES,
  thresholds: {
    palette: colors,
    defaultColor: colors[0] || '',
  },
  noDataOption: {
    title: {
      text: 'Нет данных',
      textStyle: {
        color: secondaryTextColor,
        fontWeight: 300,
        fontFamily: fontFamily,
      },
    },
  },
});
