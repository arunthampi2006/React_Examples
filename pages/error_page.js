import React from 'react'
import { connect } from 'react-redux'

class ErrorPage extends React.Component {
  static getInitialProps(router) {
    return {pathname: router.pathname}
  }
  render () {
    return (
      <div>
        <p>This should not be rendered via SSR: {this.props.pathname} </p>
      </div>
    )
  }
}

export default connect()(ErrorPage)
