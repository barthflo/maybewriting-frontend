import '../styles/globals.css'
import App, { AppContext, AppProps } from 'next/app'
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import Script from 'next/script'
import { fetchApi } from '../lib/api'

export type MenuItem = {
  id: number,
  name: string,
  path: string,
  active?: boolean
}

export type Menu = {
  id: number,
  menu_item: MenuItem[]
}

export type Settings = {
  google_analytics_key: string,
  site_title: string,
  site_subtitle: string,
  quote: string,
  menu: Menu
}

export const GlobalContext = createContext<Settings | null>(null)

export const useGlobal = () => {
  return useContext(GlobalContext)
}

const MyApp = ({ Component, pageProps }: AppProps) => {

  const [settings, setSettings] = useState<Settings | undefined>()

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


// MyApp.getInitialProps = async (ctx: AppContext): Promise<AppProps> => {
//   const appProps = await App.getInitialProps(ctx);
//   const settings = await fetchApi('/settings')
//   console.log(settings)
//   return {
//     ...appProps, pageProps: { settings }
//   }
// }

export default MyApp



