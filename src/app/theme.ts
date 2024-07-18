'use client'
import { Nunito } from 'next/font/google';
import { createTheme } from "@mui/material";

const nunito = Nunito({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const wooviTheme = createTheme({
  typography: {
    fontFamily: nunito.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#4D4D4D',
      light: '#E5E5E5'
    },
    secondary: {
      main: '#03D69D'
    },
    info: {
      main: '#133A6F'
    }
  }
})

export default wooviTheme;