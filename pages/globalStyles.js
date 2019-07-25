import React, { Component } from 'react'

// import Styles from '../styles/common.css'
//
// import Bootstrap from 'bootstrap/scss/bootstrap.scss'
// import 'nprogress/nprogress.css'
// import {NproStyles} from 'nprogress/nprogress.css'
// <style jsx global>{Bootstrap }</style>
// <style jsx global>{`${NproStyles }`}</style>
// <link
//   rel='stylesheet'
//   href='bootstrap/dist/css/bootstrap.css'
// /><style jsx global>{`${NproStyles }`}</style>
// <style jsx global>{Styles}</style>
class GlobalStyles extends Component {
  render () {
    return (
      <>
      <style jsx global>{`
        body {
          margin-left: 15px;
        }
        `}</style>
      </>
    )
  }
}
export default(GlobalStyles)
