import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import MainNewsListComponent from "./news/MainNewsListComponent";
import HomePageComponent from "./home/HomePageComponent";
import SignInComponent from "./login/SignInComponent";
import MainProfileComponent from "./profile/MainProfileComponent";

import '../styles/styles.css'

const App = () => (
  <Router>
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
