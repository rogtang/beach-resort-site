import React from 'react';
import './App.css';
import Navbar2 from './components/Navbar2'
import Home from './pages/Home'
import Error from './pages/Error'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar2/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route component ={Error} />
      </Switch>
    </div>
  );
}

export default App;
