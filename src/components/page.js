import React, { Component } from 'react'

class Page extends Component {
  componentDidMount() {
    this.props.getBreads();
  }

  render() {
    let { breads, isFetched, error } = this.props

    let displayBreads = breads.map(bread => {
      return (
        <li key={bread.id}>
          {bread.name}
        </li>
      )
    })

    return (
      <div className="page">
        {error && <div>{error}</div>}
        {isFetched ? (
          <p>Loading...</p>
        ) : (
          <ul>{displayBreads}</ul>
        )}
      </div>
    )
  }
}

export default Page