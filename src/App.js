import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import reduxStore from './redux/store';
import Header from "./component/Header";
import Team from "./page/Team";
import Home from "./page/Home";

import About from "./page/About";

function App() {
    return (
        <Provider store={reduxStore}>
            <Router>
                <div className="container-fluid p-0">
                    <Header/>
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/team"} component={Team}/>
                        <Route exact path={"/about"} component={About}/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
