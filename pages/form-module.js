import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

import DisplayForm from 'components/redux/form-modules/displayForm'
import UserForm from 'components/redux/form-modules/userForm'
import Social from 'components/redux/form-modules/social'

class FormModule extends Component {
  render () {
    return (
      <div>
        <DisplayForm/>
        <Row>
          <Col lg={6}>
            <UserForm/>
          </Col>
          <Col lg={6}>
            <Social/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default FormModule
