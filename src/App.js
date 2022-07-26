import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './components/users/register';
import Forgot from './components/users/forgot';
import Reset from './components/users/reset';
import Activate from './components/users/activate';
import Login from './components/users/login';
import DashBoard from './components/dashboard';
import ProtectedRoute from './components/common/protectedRoute';
import FileUpload from './components/fileUpload';
import Home from './components/home';
import Stats from './components/stats';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Switch>    
          <Route path='/' exact component={Home} />
          <Route path='/stats' component={Stats} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/forgot' component={Forgot} />
          <Route path='/reset/:id' exact component={Reset} />
          <Route path='/activate/:id' exact component={Activate} />
          <ProtectedRoute path='/dashboard' component={DashBoard} />
          <ProtectedRoute path='/files' component={FileUpload} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
