import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { login } from './loginSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <input onChange={event => setEmail(event.target.value)} placeholder="E-mail Address" type="email" />
        <input onChange={event => setPassword(event.target.value)} placeholder="Password" type="password"/>
        <button onClick={() => dispatch(login(email, password)) } type="submit">Submit</button>
        {/* <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      </header>
    </div>
  );
}

export default App;
