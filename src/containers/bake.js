import { connect } from 'react-redux';
import * as bakeActions from '../redux/actions/bake';
import Bake from '../components/bake';

function mapStateToProps(state) {
  const { recipe, isFetched, error } = state.bake

  return {
    recipe,
    isFetched,
    error
  }
}

const mapDispatchToProps = {
  getRecipeByBreadId: bakeActions.getRecipeByBreadId
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bake)