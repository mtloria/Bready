import React, { Component } from 'react';

class Bake extends Component{
    state = {
        breadId: null,
        breadName: null,
    }

    componentDidMount() {
        const { breadId, breadName } = this.props.location.state;
        this.setState({breadId, breadName});
        this.props.getRecipes(breadId);
    }

    estimateTotalTime = (recipe) => {
        let time = recipe.bulkFermentTime + recipe.proofTime + 
            +(((recipe.bakeTime/60).toFixed(2))) + 
            +(((recipe.mixTime/60).toFixed(2)));

        return this.roundTimeToNearestQuarter(time);
    }

    roundTimeToNearestQuarter = (time) => {
        let last2DigitsStringArray = time.toString().split("").slice(-2);
        let last2DigitsString = "";
        let last2Digits;
        let bumpOneHour = false;
        last2DigitsStringArray.forEach((digit) => {
            last2DigitsString += digit;
        });

        if(last2DigitsString <= 10){
            last2Digits = 0;
        }
        else if(last2DigitsString <= 35){
            last2Digits = 25;
        }
        else if(last2DigitsString <= 60){
            last2Digits = 50;
        }
        else if(last2DigitsString <= 85){
            last2Digits = 75;
        }
        else{
            bumpOneHour = true;
        }

        if(bumpOneHour){
            return Math.ceil(time);
        }

        return +(time.toString().split(".")[0] + "." + last2Digits);
    }

    render(){
        let { recipe, isFetched, error } = this.props;
        const { breadId, breadName } = this.state;
        let timeEstimate = this.estimateTotalTime(recipe);

        return(
            <div className="bake-overview">
                <div className="bake-overview-header">
                    <p className="bread-name">{breadName}</p>
                </div>
                {error && <div>{error}</div>}
                    {isFetched ? (
                    <p>Loading...</p>
                    ) : (
                        <div className="bake-overview-recipe-area">
                            <p>Recipe Overview</p>
                            <p>Ingredients:</p>
                            <ul>
                                <li>Flour: {recipe.flour} grams</li>
                                <li>Salt: {recipe.salt} grams</li>
                                <li>Water: {recipe.water} grams at {recipe.waterTemp} degrees</li>
                                {recipe.yeast &&
                                    <li>Yeast: {recipe.yeast} grams (or {recipe.yeastTsp} teaspoons)</li>
                                }
                                {recipe.starter &&
                                    <li>Starter: {recipe.starter} grams</li>
                                }
                            </ul>
                            <p>Time Overview:</p>
                            <ul>
                                <li>Mix Time: {recipe.mixTime} minutes</li>
                                <li>Bulk Fermentation: {recipe.bulkFermentTime} hour(s)</li>
                                <li>Proof Time: {recipe.proofTime} hour(s)</li>
                                <li>Bake Time: {recipe.bakeTime} minutes</li>
                                <li>Total Estimated Time to Bready Goodness: {timeEstimate} hours</li>
                            </ul>
                        </div>
                    )}
            </div>
        )
    }
}

export default Bake;