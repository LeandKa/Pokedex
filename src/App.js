import React from 'react';
import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import Home from './Page/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MyPokedex from './Page/Pokedex/MyPokedex';
import Pokemon from './Page/Pokemon/Pokemon';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/My-Pokedex" exact component={MyPokedex}></Route>
          <Route path="/Pokemon/:id" exact component={Pokemon}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
