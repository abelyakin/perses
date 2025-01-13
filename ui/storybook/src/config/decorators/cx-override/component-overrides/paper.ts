import { Components, Theme } from '@mui/material';

export const MuiPaper: Components<Theme>['MuiPaper'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            backgroundColor: theme.palette.common.white,
            borderRadius: '6px',
            '&& > svg + span': {
                display: 'none',
            },
        }),
    },
};
