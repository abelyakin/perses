import { PaletteOptions } from '@mui/material';

import { background } from './background';
import { black, white } from './colors/common';
import { error } from './error';
import { primary } from './primary';
import { secondary } from './secondary';
import { success } from './success';
import { text } from './text';
import { warning } from './warning';
import { blue, green, grey, orange, purple, red } from './colors';

export const getPaletteOptions: PaletteOptions = {
  primary,
  secondary,
  grey,
  background,
  text,
  error,
  warning,
  info: primary,
  success,
  common: {
    white,
    black,
  },
  designSystem: {
    blue,
    green,
    grey,
    orange,
    purple,
    red,
  },
};
