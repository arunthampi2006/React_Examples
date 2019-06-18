import React from 'react'
import Header from 'components/header-module/header'
import { connect } from 'react-redux'

class ErrorPage extends React.Component {
  static getInitialProps(router) {
    return {pathname: router.pathname}
  }
  render () {
    return (
      <div>
        <Header/>
        <p>This should not be rendered via SSR: {this.props.pathname} </p>
      </div>
    )
  }
}

export default connect()(ErrorPage)
