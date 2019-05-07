import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page from '../containers/page';
import Bake from '../containers/bake';
import { Provider } from 'react-redux';

const App = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={Page}></Route>
            <Route path="/bake" component={Bake}></Route>
        </Router>
    </Provider>
)

export default App;