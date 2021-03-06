import React from 'react'
import 'isomorphic-unfetch'

export default class Preact extends React.Component {

  static async getInitialProps () {
    const res = await fetch('https://api.github.com/repos/developit/preact')
    const json = await res.json()
    return {stars: json.stargazers_count}
  }
  render () {
    return (
      <div>
        <p>Preact page has {this.props.stars} ⭐️</p>
      </div>
    )
  }
}
