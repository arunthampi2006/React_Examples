import React, { Component } from 'react'
import Head from 'next/head'

class Nxthead extends Component {
  render () {
    return (
      <Head>
        <title>React Application Examples</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link href="/static/css/globalStyles.css" rel="stylesheet" />
        <style>{`
          .page {
            height: 100vh;
          }
        `}</style>
      </Head>
    )
  }
}

export default Nxthead
