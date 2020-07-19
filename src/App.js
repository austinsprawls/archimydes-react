import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Login } from './scenes/login/Login';
import { CreateStory } from './scenes/createStory/CreateStory';
import { ListStories } from './scenes/listStories/ListStories';
import { ReviewStory } from './scenes/reviewStory/ReviewStory';

// import { checkAuthentication } from './scenes/login/loginSlice'

import './App.css';
// import { useDispatch } from 'react-redux';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/stories-create">
          <CreateStory />
        </Route>
        <Route path="/stories-list">
          <ListStories />
        </Route>
        <Route path="/stories-review" render={props =>  <ReviewStory {...props} />} />       
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

// // A wrapper for <Route> that redirects to the login
// // screen if you're not yet authenticated.
// async function PrivateRoute({ children, ...rest }) {
//   console.log("children and rest: ", children, rest)
//   const dispatch = useDispatch();
//   const isAuthenticated = await dispatch(checkAuthentication());
//   console.log("check private route auth: ", isAuthenticated)
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         localStorage.getItem('authToken') ?
//          (children)
//           :
//            (
//           <Redirect
//             to="/"
//           />
//         )
//       }
//     />
//   );
// }

export default App;
