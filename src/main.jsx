import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { theme } from './Theme/Theme'
import { ThemeProvider } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme} >
    <App />
  </ThemeProvider>

)
