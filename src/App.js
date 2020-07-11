import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import UsersList from './components/UsersList';
import Profil from './components/Profil';

const App = () => {

  return (
    <Router>
      <div className="App">
        <div className="container">
          <img className="img-responsive" src="./header_background.jpg" alt="Des montgolfières survolant une valée"/>
          <Route exact path="/" component={ UsersList } />
          <Route exact path="/profil/:id" component={ Profil } />
        </div>
      </div>
    </Router>
  );
};

export default App;
