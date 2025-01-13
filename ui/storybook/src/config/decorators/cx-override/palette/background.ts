import { PaletteOptions } from '@mui/material';
import { blue, grey, white } from './colors';

export const background: PaletteOptions['background'] = {
  navigation: blue[150],
  overlay: 'rgba(21, 23, 33, 0.75)',
  default: white,
  paper: white,
  code: grey[50],
  tooltip: grey[100],
  lighter: grey[50],
  border: grey[100],
};
