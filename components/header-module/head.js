import React, { Component } from 'react'
import Head from 'next/head'

class head extends Component {
  render () {
    return (
      <Head>
        <title>Form Handler</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css'
        />
      </Head>
    )
  }
}

export default head
