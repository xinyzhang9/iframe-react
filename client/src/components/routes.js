import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Contact from './Contact';
import About from './About';
import Feed from './Feed';
import Callback from './Callback/Callback';
import Auth from '../Auth/Auth';
import history from '../history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history} component={App}>
        <div className="container">
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/feed" render={(props) => <Feed auth={auth} {...props} />} />
          <Route path="/about" render={(props) => <About auth={auth} {...props} />} />
          <Route path="/contact" render={(props) => <Contact auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}
