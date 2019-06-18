import React from 'react'
import Header from 'components/header-module/header'
import { connect } from 'react-redux'

const aboutPage = () => (
  <div>
    <Header />
    <p>This is the about page.</p>
  </div>
)

export default connect()(aboutPage)
