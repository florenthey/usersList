import React from 'react';
import './App.css';
import UsersList from './components/UsersList';

const App = () => {

  return (
    <div className="App">
      <div className="header">
        <img src="./header_background.jpg" alt="Des montgolfières survolant une valée"/>
        <UsersList />
      </div>
    </div>
  );
};

export default App;
