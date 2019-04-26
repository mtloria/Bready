import { connect } from 'react-redux'
import * as pageActions from '../redux/actions/page'
import Page from '../components/page'

function mapStateToProps(state) {
  const { breads, isFetched, error } = state.page

  return {
    breads,
    isFetched,
    error
  }
}

const mapDispatchToProps = {
  getBreads: pageActions.getBreads
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)