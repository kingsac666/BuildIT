import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#F9FAFB', // Tailwind gray-50
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Poppins, Inter, Roboto, Helvetica, Arial, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Poppins, Inter, Roboto, Helvetica, Arial, sans-serif',
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

export default theme;
