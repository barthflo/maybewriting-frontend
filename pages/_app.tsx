import '../styles/globals.css'
import App, { AppContext, AppProps } from 'next/app'
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import Script from 'next/script'
import { fetchApi } from '../lib/api'
import { ISettings } from '../@types/settings.types'


export const GlobalContext = createContext<ISettings | null>(null)

export const useGlobal = () => {
  return useContext(GlobalContext)
}

const MyApp = ({ Component, pageProps }: AppProps) => {

  const [settings, setSettings] = useState<ISettings | undefined>()

  const getSettings = useCallback(async () => {
    const response = await fetchApi('/settings')
    setSettings(response)
  }, [])

  useEffect(() => {
    getSettings()
  }, [getSettings])

  if (!settings) return 'Loading'

  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${settings.google_analytics_key}`} />
      <Script
        id="ga-script"
        async
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${settings.google_analytics_key}');`
        }}
      />
      <GlobalContext.Provider value={settings}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  )
}

export default MyApp



