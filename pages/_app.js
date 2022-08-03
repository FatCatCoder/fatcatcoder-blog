import { useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import siteConfig from '../config/siteConfig.js'
import Layout from '../components/Layout'
import nightwind from "nightwind/helper"
import '../styles/global.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if(typeof(window) != undefined){
      // window.document.documentElement.classList.add('dark');

      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        window.document.documentElement.classList.add('dark');
      } else {
        window.document.documentElement.classList.remove('dark')
    }
    }
  }, [])

  return (
    <>
      <DefaultSeo
        titleTemplate={'%s | ' + siteConfig.title}
        defaultTitle={siteConfig.title}
        description={siteConfig.description}
        {...siteConfig.nextSeo}
      />
      <Head>
      <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      </Head>
      
      <Layout title={pageProps.title}>
        <Component {...pageProps} />
      </Layout>
     
    </>
  )
}

export default MyApp
