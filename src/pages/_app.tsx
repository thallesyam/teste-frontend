import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import CountProvider from '../contexts/ProductsCount'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CountProvider>
        <Component {...pageProps} />
      </CountProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
