import React, { Component } from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <Header />
       <Navigation />
      </div>
    );
  }
}

export default App;
