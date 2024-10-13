import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

export const theme = createTheme({
    components: {
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    '&.Mui-checked': {
                        color: orange[600],
                        '& + .MuiSwitch-track': {
                            backgroundColor: orange[600],
                        },
                    },
                },
                track: {
                    backgroundColor: '#bdbdbd',
                },
            },
        },
    },
});
