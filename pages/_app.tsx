import '../styles/globals.css'
import { AppProps } from 'next/app'
import React from 'react'
import Layout from '../components/Layout'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import Script from 'next/script'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-8D2TPDM0BY" />
      <Script
        id="ga-script"
        async
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-8D2TPDM0BY');`
        }}
      />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
