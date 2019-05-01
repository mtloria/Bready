import React, { Component } from 'react'
import BreadList from '../components/breadList'
import HomeBanner from '../components/homeBanner'

class Page extends Component {
  componentDidMount() {
    this.props.getBreads();
  }

  render() {
    let { breads, isFetched, error } = this.props;

    return (
      <div className="page">
        <HomeBanner />
        {error && <div>{error}</div>}
        {isFetched ? (
          <p>Loading...</p>
        ) : (
          <BreadList breads={breads} />
        )}
      </div>
    )
  }
}

export default Page;