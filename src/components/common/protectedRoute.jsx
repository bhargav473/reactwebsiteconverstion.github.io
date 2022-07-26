import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import users from '../../services/userService';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!users.getCurrentUser())
          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
