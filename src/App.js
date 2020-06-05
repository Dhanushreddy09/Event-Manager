import React from 'react';
import './App.css';
import AppNavbar from './components/layout/AppNavbar'
import { HashRouter as Router,Route,Switch } from 'react-router-dom';
import Dashboard from '../src/components/layout/Dashboard'
import About from '../src/pages/About'
import NotFound from '../src/pages/NotFound'
import AddEvent from './components/events/AddEvent'
import store from './store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
       <AppNavbar branding="Find My Movies" />
       <Switch>
       <div className="container">
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/add" component={AddEvent} />
        <Route exact path="/about" component={About} />
       </div>
       </Switch>
    </div>
    </Router>
    </Provider>
  );
}

export default App;