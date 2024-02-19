// theme.js
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F3FFFF', // Primary color
    },
    secondary: {
      main: '#f50057', // Secondary color
    },
    // You can define additional custom colors as needed
    customColor: {
      main: '#00ff00', // Custom color
    },
    background: {
      main: "#FFFFFF"
    },
  },
});

export default theme;
