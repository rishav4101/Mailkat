import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#ff3d00",
      },
      secondary: {
        main: "#dd2c00",
      },

    },
    typography: {
      fontFamily: [
        'Quicksand'
      ].join(','),
    },
  });
  
export default theme;