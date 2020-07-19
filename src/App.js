import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Login } from './scenes/login/Login';
import { CreateStory } from './scenes/createStory/CreateStory';
import { ListStories } from './scenes/listStories/ListStories';
import { ReviewStory } from './scenes/reviewStory/ReviewStory';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/stories-create">
          <CreateStory />
        </PrivateRoute>
        <PrivateRoute path="/stories-list">
          <ListStories />
        </PrivateRoute>
        <Route path="/stories-review" render={props =>  <ReviewStory {...props} />} />     
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = localStorage.getItem('authToken');
  if (isAuthenticated) {
    return <Route {...rest} render={() => children} />
  }
  else {
    return <Route {...rest} render={() => <Redirect to="/" />} />
  }
}

export default App;
