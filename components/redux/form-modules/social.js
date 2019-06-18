import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

import Input from '../handler/react-handler'

class Social extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col lg={8}>
            <Input controlLabel='Facebook' title='Social' name='facebook'/>
          </Col>
          <Col lg={8}>
            <Input controlLabel='Instagram' title='Social' name='instagram'/>
          </Col>
          <Col lg={8}>
            <Input controlLabel='Twitter' title='Social' name='twitter'/>
          </Col>
          <Col lg={8}>
            <Input controlLabel='GitHub' title='Social' name='github'/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Social
