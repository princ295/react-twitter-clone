import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  typography: {
    // : 1,lineHeight
    fontFamily: [
      // 'TwitterChirpExtendedHeavy', 
      // 'Verdana',
      // '-apple-system', 
      // 'BlinkMacSystemFont', 
      // "Segoe UI", 
      // 'Roboto', 
      // 'Helvetica', 
      // 'Arial', 
      // 'sans-serif',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Ubuntu',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: 'rgb(29, 161, 242)',
      dark: 'rgb(26, 145, 218)',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgb(26, 145, 218)',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#14171a',
    },
    action: {
      disabledBackground: 'rgb(153 216 255)',
      disabled: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          textTransform: 'none',
          fontSize: 16,
          height: 40,
          fontWeight: 600,
          boxShadow: 'none'
        },
        textPrimary: {
          paddingLeft: 20,
          paddingRight: 20,
        },
        outlinedPrimary: {
          borderColor: 'rgb(29, 161, 243)',
        },
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        underline: {
          '&:after': {
            borderBottomWidth: '2px',
          },
          '&:before': {
            borderColor: '#000',
            borderBottomWidth: '2px',
          },
        },
        input: {
          backgroundColor: 'rgb(245, 248, 250)',
        },
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 15,
        },
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          marginBottom: 8,
        },
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgb(204, 214, 221)',
          marginBottom: 10,
          padding: '10px 15px',
          '& h2': {
            display: 'flex',
            alignItems: 'center',
            fontWeight: 800,
          },
          '& button': {
            padding: 8,
            marginRight: 20,
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {

          '&:not(:first-child):not(:last-child)': {
            width: 'fit-content',
            height: "45px",
            borderRadius: 30,
            marginBottom: 15,
          },

          '&:hover:first-child': {
            background: 'transparent',
          },

          '&:not(:first-child)': {
            '& svg path': {
              // fill: '#53575b'
              fill: '#000'
            }
          },

          '& div span': {
            // color: '#53575b',
            color: '#000'
          },

          '&:not(:last-child)': {
            background: '',
          },

          '&:hover:not(:first-child):not(:last-child)': {
            background: 'rgba(29, 161, 242, 0.1)',
            color: 'rgb(29, 161, 242)',
            '& svg path': {
              background: 'rgba(29, 161, 242, 0.1)',
              color: 'rgb(29, 161, 242)',
            },

            '& div span': {
              color: 'rgb(29, 161, 242)',
            }
          }
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: 'rgb(20, 23, 26)',
          fontSize: '20px'
        }
      }
    }

  },
});

export default theme;
