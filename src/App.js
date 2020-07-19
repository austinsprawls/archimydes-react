import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './scenes/login/Login';
import { CreateStory } from './scenes/createStory/CreateStory';
import './App.css';
import { ListStories } from './scenes/listStories/ListStories';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/stories-create" component={CreateStory} />
        <Route path="/stories-list" component={ListStories} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

// function PrivateRoute({comp: Component, ...rest }) {
//   console.log("is there auth key: ", localStorage.getItem('authToken'))
//   localStorage.removeItem('authToken')
//   return (
//     <Route
//       {...rest}
//       render={({ location }) => {
//         if (localStorage.getItem('authToken')) {
//           console.log("GOT TOKEN")
//           return (<Component  />);
//         }
//         else {
//           console.log("GOT NO TOKEN")
//           return (
//             <Redirect
//               to={{
//                 pathname: "/",
//               }}
//             />
//           )
//         }
//       }
//       }
//     />
//   );
// }

export default App;
