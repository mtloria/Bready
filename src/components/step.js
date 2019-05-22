import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { O_NOATIME } from 'constants';

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
        if(nextProps.location.state.stepNumber != this.state.stepNumber)
        {
            const { recipe, stepNumber } = nextProps.location.state;
            this.setState({recipe, stepNumber});
            this.props.getStepByRecipeIdAndNumber(recipe.id, stepNumber);
        }
      }

      splitUpTimeIntoHoursAndMinutes = (time) => {
        let hours = (time / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        let hourText = rhours ? 
            rhours > 1 ?
                rhours + " hours " : 
                rhours + " hour "
            : "";
        let minuteText = rminutes && rhours ? 
            "and " + rminutes + " minutes" :
            rminutes ? 
                rminutes + " minutes" :
                "";
        return rhours && rminutes ? 
            hourText + minuteText :
            "None. Continue when ready!";
      }

    render(){
        let { step, isFetched, error } = this.props;
        const { recipe, stepNumber } = this.state;
        let timeToNextStep = this.splitUpTimeIntoHoursAndMinutes(step.timeToNextStep);
        
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
                                {step.stepNumber != recipe.numberOfSteps &&
                                    <p>Time to next step: {timeToNextStep}</p>
                                }
                            </div>
                            {stepNumber > 1 &&
                            <div>
                                <Link to={{
                                    pathname: '/step',
                                    state: {
                                        recipe: recipe,
                                        stepNumber: stepNumber - 1,
                                    }
                                }}>Go Back One Step</Link>
                            </div>
                            }
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