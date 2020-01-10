import React from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from "react-redux";

export const PrivateRoute = ({ component: Component, loginStatus, login, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      loginStatus === login ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      )
    }
  />
);

const mapStateToProps = ({rootReducer}) => ({
  loginStatus: rootReducer.loginStatus
});

export default connect(mapStateToProps)(PrivateRoute);