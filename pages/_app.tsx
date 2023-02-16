import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Layout } from '../components/Layout'
import '../styles/globals.css'
import '../styles/nprogress.css'

export default function App({ Component, pageProps }: AppProps) {
  NProgress.configure({ showSpinner: false })

  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })

  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
