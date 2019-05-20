import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Step extends Component{
    state = {
        recipe: null,
        stepNumber: null,
    }

    componentDidMount() {
        const { recipe, stepNumber } = this.props.location.state;
        this.setState({recipe, stepNumber});
        this.props.getStepByRecipeIdAndNumber(recipe.id, stepNumber);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.location.state.stepNumber > this.state.stepNumber)
        {
            const { recipe, stepNumber } = nextProps.location.state;
            this.setState({recipe, stepNumber});
            this.props.getStepByRecipeIdAndNumber(recipe.id, stepNumber);
        }
      }

    render(){
        let { step, isFetched, error } = this.props;
        const { recipe, stepNumber } = this.state;

        return(
            <div>
                {error && <div>{error}</div>}
                {isFetched ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {recipe &&
                        <div className="step-area">
                            <div className="step-details">
                                <p>Step {step.stepNumber} of {recipe.numberOfSteps}</p>
                                <p>{step.text}</p>
                                {step.additionalText &&
                                    <p>{step.additionalText}</p>
                                }
                                <p>Time to next step: {step.timeToNextStep} minutes</p>
                            </div>

                            {stepNumber + 1 <= recipe.numberOfSteps &&
                            <div>
                                <Link to={{
                                            pathname: '/step',
                                            state: {
                                                recipe: recipe,
                                                stepNumber: stepNumber + 1,
                                            }
                                        }}>Finished this step, let's move on!</Link>
                            </div>
                            }
                        </div>
                        }
                    </div>
                )}
            </div>
        )
    }
}

export default Step;