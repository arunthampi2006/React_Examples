import React, { Component } from 'react'
import Head from 'next/head'

class head extends Component {
  render () {
    return (
      <Head>
        <title>React Application Examples</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css'
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='css/ngprogress.css'
        />
        <style>{`
          .page {
            height: 100vh;
          }
        `}</style>
      </Head>
    )
  }
}

export default head
