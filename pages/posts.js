import React, {Component} from 'react'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

import P from 'components/nested-layouts/paragraph'
import Post from 'components/nested-layouts/post'
import Input from 'components/redux/handler/react-handler'

class posts extends Component {
  static getInitialProps({ query: { id } }) {
    return { postId: id }
  }
  render () {
    return (
      <div>
        <h1>My blog post #{this.props.postId}</h1>
        <Post title='Test blog post'>
          <Row>
            <Col lg={8}>
              <Input controlLabel='Post' title='post' name='post'/>
            </Col>
          </Row>
          <P> Content would be available soon </P>
        </Post>
      </div>
    )
  }
}
export default connect()(posts)
