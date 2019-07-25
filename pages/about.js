import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'

class About extends Component {
  static pageTransitionDelayEnter = true

  static getInitialProps () {
    let pageProps = this.props
    let loaded = false
    return { ...pageProps, loaded }
  }
  constructor (props) {
    super(props)
    this.state = {loaded: false}
  }
  componentDidMount () {
    this.timeoutId = setTimeout(() => {
      this.props.pageTransitionReadyToEnter()
      this.setState({loaded: true})
    },5000)
  }

  componentWillUnmount () {
    if (this.timeoutId) clearTimeout(this.timeoutId)
  }

  render () {
    if (!this.state.loaded) return null
debugger
    return (
      <div className='container bg-success page'>
      <Button variant="primary">Primary</Button>
        <h1>About us</h1>
        <p>
          Notice how a loading spinner showed up while my content was "loading"?
          Pretty neat, huh?
        </p>
        <img src="static/images/rose-test-img.jpeg"/>
      </div>
    )
  }
}
About.propTypes = {
  pageTransitionReadyToEnter: PropTypes.func
}

About.defaultProps = {
  pageTransitionReadyToEnter: () => {}
}

export default connect()(About)
