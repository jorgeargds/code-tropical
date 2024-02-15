// theme.js
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Primary color
    },
    secondary: {
      main: '#f50057', // Secondary color
    },
    // You can define additional custom colors as needed
    customColor: {
      main: '#00ff00', // Custom color
    },
  },
});

export default theme;
