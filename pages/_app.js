import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import { PageTransition } from 'next-page-transitions'
import NProgress from 'nprogress'
import Router from 'next/router'

import Header from 'components/header-module/header'
import Footer from 'components/footer'
import Loader from 'components/loader'
import GlobalStyles from './globalStyles'

// import 'bootstrap/dist/css/bootstrap.css'
// import NProgressStyle from 'nprogress/nprogress.css'

const TIMEOUT=400
const DELAY=450

Router.events.on('routeChangeStart', url => {
  console.log('NProgress--',NProgress, `----- Loading ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


class ReactApp extends App {
  static async getInitialProps ( { Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    // console.log('---this.props---', this.props)
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Header />
        <PageTransition
          timeout={TIMEOUT}
          classNames='page-transition'
          loadingComponent={<Loader />}
          loadingDelay={DELAY}
          loadingTimeout={{enter: TIMEOUT, exit: 0}}
          loadingClassNames='loading-indicator'>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </PageTransition>
        <Footer/>

        <GlobalStyles/>

      </Container>
    )
  }
}

export default withRedux(initStore)(ReactApp)
