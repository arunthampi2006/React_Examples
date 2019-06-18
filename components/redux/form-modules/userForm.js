import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

import Input from '../handler/react-handler'

class UserForm extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col lg={8} lgOffset={4}>
            <Input controlLabel='Name' title='user' name='name'/>
          </Col>
          <Col lg={8} lgOffset={4}>
            <Input controlLabel='Last name' title='user' name='lastname'/>
          </Col>
          <Col lg={8} lgOffset={4}>
            <Input controlLabel='Email' type='email' title='user' name='email'/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default UserForm
