import React from 'react';
import { Router, Route, Switch} from "react-router-dom";
import history from "./../router/history";

import MainNewsListComponent from "./news/MainNewsListComponent";
import HomePageComponent from "./home/HomePageComponent";
import SignInComponent from "./login/SignInComponent";
import MainProfileComponent from "./profile/MainProfileComponent";

import '../styles/styles.css'

const App = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={HomePageComponent} />
        <Route exact path="/news" component={MainNewsListComponent} />
        <Route exact path="/login" component={SignInComponent} />
        <Route exact path="/profile" component={MainProfileComponent} />
      </Switch>
    </div>
  </Router>
);

export default App;
