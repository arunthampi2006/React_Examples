import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from 'components/header-module/header'
import Footer from 'components/footer'

class Index extends Component {
  render () {
    return (
      <div>
        <Header />
        <p>Home Page!</p>
        <Footer/>
      </div>
    )
  }
}

export default connect()(Index)
