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
        return recipe.bulkFermentTime + recipe.proofTime + (Math.floor(recipe.bakeTime/60));
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
                                <li>Bulk Fermentation: {recipe.bulkFermentTime} hour(s)</li>
                                <li>Proof Time: {recipe.proofTime} hour(s)</li>
                                <li>Total Estimated Time to Bready Goodness: {timeEstimate} hours</li>
                            </ul>
                        </div>
                    )}
            </div>
        )
    }
}

export default Bake;