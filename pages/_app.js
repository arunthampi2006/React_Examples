import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

import Head from 'components/header-module/head'
import Footer from 'components/footer'

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
        <Head/>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <Footer/>
      </Container>
    )
  }
}

export default withRedux(initStore)(ReactApp)
