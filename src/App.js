import React from 'react';
import logo from './logo.svg';
import './App.css';
// import HelloUser from './components/HelloUser';
import FriendsContainer from './components/FriendsContainer';

//Because our FriendsContainer is the parent of our other containers,
//All we need to return in the App.js is one JSX instance of our FriendsContainer.
function App() {
  return (
    <div className="App">
        <FriendsContainer />
    </div>
  );
}

export default App;
