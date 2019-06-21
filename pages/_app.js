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
import Head from './head'

const TIMEOUT=400
const DELAY=450

Router.events.on('routeChangeStart', url => {
  console.log(NProgress, `----- Loading ${url}`)
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
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Head />
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
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity ${TIMEOUT}ms;
          }
          .loading-indicator-appear,
          .loading-indicator-enter {
            opacity: 0;
          }
          .loading-indicator-appear-active,
          .loading-indicator-enter-active {
            opacity: 1;
            transition: opacity ${TIMEOUT}ms;
          }
        `}</style>
      </Container>
    )
  }
}

export default withRedux(initStore)(ReactApp)
