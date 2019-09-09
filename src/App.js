import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home, Rooms, SingleRoom, NotFound } from './pages';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/room/:slug" component={SingleRoom} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
