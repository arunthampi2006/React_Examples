import { connect } from 'react-redux'
import React, { Component } from 'react'
//import { withRouter } from 'next/router'
//import BlogPost from '../components/layouts/blog-post'
//import Page from '../components/layouts/page'


/*export const meta = {
  title: 'About',
  summary: 'Hi! This is a placeholder page. I thought that the header was too empty so I wanted to add an element to show how to add additional pages and put a small navigation here.',
}*/

class BlogAbout extends Component {
  render () {
    return (
      <>
      <div>hi test</div>
      </>
    )
  }
}
export default connect()(BlogAbout)
