import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Rubik",
  },
  components: {
    // MuiFormHelperText: {
    //   styleOverrides: {
    //     root: {
    //       marginLeft: 0,
    //       marginRight: 0,
    //       fontWeight: 400,
    //       "&.Mui-error": {
    //         paddingLeft: "0.4em",
    //         position: "relative",
    //         "&::before": {
    //           content: '"!"',
    //           position: "absolute",
    //           left: 0,
    //           top: 0,
    //           bottom: 0,
    //         },
    //       },
    //     },
    //   },
    // },
  },
});

export default theme;
