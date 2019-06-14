import React from 'react'
import Header from 'components/header_module/header'

class ErrorPage extends React.Component {
  static getInitialProps(router) {
    return {pathname: router.pathname}
  }
  render (req) {
    return (
      <div>
        <Header/>
        <p>This should not be rendered via SSR: {this.props.pathname} </p>
      </div>
    )
  }
}

export default ErrorPage
