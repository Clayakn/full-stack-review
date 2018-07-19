import React, { Component } from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <Header />
       <Navigation />
      {routes()}
      </div>
    );
  }
}

export default App;
