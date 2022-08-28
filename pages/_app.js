import { useEffect, createContext, useState, useContext} from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import siteConfig from '../config/siteConfig.js'
import Layout from '../components/Layout'
import nightwind from "nightwind/helper"
import '../styles/global.css'
import 'tailwindcss/tailwind.css'
import { StoreContext, Store } from '../components/StoreContext.js'

import { TransitionProvider } from "../components/TransitionContext"
import TransitionLayout from "../components/TransitionLayout"

function MyApp({ Component, pageProps }) {
  const GlobalStore = useContext(StoreContext)
  const [isDarkMode, setIsDarkMode] = useState(GlobalStore.isDarkMode);

  return (
    <>
    <StoreContext.Provider value={{isDarkMode, setIsDarkMode}}>
      <DefaultSeo
        titleTemplate={'%s | ' + siteConfig.title}
        defaultTitle={siteConfig.title}
        description={siteConfig.description}
        {...siteConfig.nextSeo}
      />
      <base href="/fatcatcoder"></base>
      <Head>
      <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      </Head>
      
      <TransitionProvider>
      <TransitionLayout>
        
      <Layout title={pageProps.title}>
        <Component {...pageProps} />
      </Layout>

      </TransitionLayout>
      </TransitionProvider>
      </StoreContext.Provider>
    </>
  )
}

export default MyApp
