/* eslint-disable import/named */
import { Components, Theme } from '@mui/material';

export const MuiCardHeader: Components<Theme>['MuiCardHeader'] = {
    styleOverrides: {
        root: () => ({
            borderBottom: 'none !important',
            "&& span": {
                display: 'none',
            },
        }),
    },
};
