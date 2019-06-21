import React, { Component } from 'react'
import { connect } from 'react-redux'

class Index extends Component {
  render () {
    return (
      <div>
        <p>Home Page!</p>
        <img src="static/images/rose-test-img.jpeg"/>
      </div>
    )
  }
}

export default connect()(Index)
