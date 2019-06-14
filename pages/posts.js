import React, {Component} from 'react'
import Header from 'components/header_module/header'

class posts extends Component {
  static getInitialProps({ query: { id } }) {
    return { postId: id }
  }
  render () {
    return (
      <div>
        <Header/>
        <h1>My blog post #{this.props.postId}</h1>
        <p>
          Content would be available soon
        </p>
      </div>
    )
  }
}
export default posts
