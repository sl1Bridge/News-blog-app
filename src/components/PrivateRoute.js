import React from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from "react-redux";

export const PrivateRoute = ({ component: Component, loginStatus, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      loginStatus === true ? (
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