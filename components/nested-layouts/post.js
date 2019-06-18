import React, { Component } from 'react'


class Post extends Component {
  static getInitialProps ({ title, children }) {
    return { title, children }
  }
  render () {
    return (
      <div className='main'>
        <h1> {this.props.title} </h1>
        {this.props.children}
        <style jsx>{`
          .main {
            font: 15px Helvetica, Arial;
            border: 1px solid #eee;
            padding: 0 10px;
          }
          h1 {
            font-size: 16px;
            font-weight: bold;
            margin: 10px 0;
          }
        `}
        </style>
      </div>
    )
  }
}

export default Post
