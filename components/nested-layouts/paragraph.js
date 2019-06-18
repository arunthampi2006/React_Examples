import React, { Component } from 'react'

class P extends Component {
  static getInitialProps ({ children }) {
    return { children }
  }
  render () {
    return (
      <div>
        <p> {this.props.children} </p>
        <style jsx>{`
          p {
              font: 13px Helvetica, Arial;
              margin: 10px 0;
            }
        `}</style>
      </div>
    )
  }
}

export default P
