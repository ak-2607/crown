import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const Hats = () => {
  return (
    <div>HATS</div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
