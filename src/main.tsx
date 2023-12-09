import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme.ts'
import App from './App.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>

)
