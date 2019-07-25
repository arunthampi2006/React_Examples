import React, { Component } from 'react'
import { connect } from 'react-redux'
import Document, { Head, Main, NextScript } from 'next/document'

class ReactDocument extends Document {

  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    // ctx.renderPage = () =>
    //   originalRenderPage({
    //     // useful for wrapping the whole react tree
    //     enhanceApp: App => App,
    //     // useful for wrapping in a per-page basis
    //     enhanceComponent: Component => Component
    //   });
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }
  render () {
    return (
      <html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
export default ReactDocument
