import { createTheme, ThemeProvider } from '@mui/material'
import { orange } from '@mui/material/colors'
import React from 'react'
import CardSlider from './pages/CardSlider'
import '@fontsource/poppins'

const App=()=> {
  const theme=createTheme({
    palette: {
      primary:orange,
    },
    typography: {
      fontFamily:"Poppins"
    }

  })
  return (
    <>
    <ThemeProvider theme={theme}>
      <CardSlider/>
    </ThemeProvider>
    </>
  )
}

export default App