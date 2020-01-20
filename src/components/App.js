import React from 'react';
import { Router, Route, Switch} from "react-router-dom";
import history from "../history";

import MainNewsListComponent from "./news/MainNewsListComponent";
import HomePageComponent from "./home/HomePageComponent";
import SignInComponent from "./login/SignInComponent";
import MainProfileComponent from "./profile/MainProfileComponent";

import '../styles/styles.css'
import PrivateRoute from "./PrivateRoute";

const App = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={HomePageComponent} />
        <Route exact path="/news" component={MainNewsListComponent} />
        <PrivateRoute exact login={false} path="/login" component={SignInComponent} />
        <PrivateRoute exact login={true} path="/profile" component={MainProfileComponent}/>
      </Switch>
    </div>
  </Router>
);

export default App;
