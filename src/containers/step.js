import { connect } from 'react-redux';
import * as stepActions from '../redux/actions/step';
import Step from '../components/step';

function mapStateToProps(state) {
  const { step, isFetched, error } = state.step

  return {
    step,
    isFetched,
    error
  }
}

const mapDispatchToProps = {
  getStepByRecipeIdAndNumber: stepActions.getStepByRecipeIdAndNumber
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step)