import { createMuiTheme } from '@material-ui/core/styles'

const temaClaro = createMuiTheme(({
  palette: {
    type: 'light',
    primary: {
      main: '#e82b2b',
    },
    secondary: {
      main: '#b5b5bb',
    },
    background: {
      default: '#ffffff',
      paper: '#b71c1c',
    },
  },   
}))

const temaEscuro = createMuiTheme(({
  palette: {
    type: 'dark',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#d60e0e',
    },
    background: {
      default: '#404041',
      paper: '#949496',
    },
    text: {
      primary: '#ffffff',
    },
  },
}))

export { temaClaro, temaEscuro }