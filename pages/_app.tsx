import '../styles/globals.css'
import App, { AppContext } from 'next/app'
import React, { createContext, useContext } from 'react'
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

type AppProps = {
  pageProps: {
    settings: Settings
  }
}

interface InitialProps extends AppProps {
  Component: any,
}

export const GlobalContext = createContext<Settings | null>(null)

export const useGlobal = () => {
  return useContext(GlobalContext)
}

const MyApp = ({ Component, pageProps }: InitialProps) => {

  const { settings } = pageProps

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


MyApp.getInitialProps = async (ctx: AppContext): Promise<AppProps> => {
  const appProps = await App.getInitialProps(ctx);
  const settings = await fetchApi('/settings')
  console.log(settings)
  return {
    ...appProps, pageProps: { settings }
  }
}

export default MyApp



