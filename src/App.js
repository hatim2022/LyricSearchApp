import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router,Route,Switch}  from 'react-router-dom';
import './App.css';
import { Component } from 'react';
 

class App extends Component {
  render(){
    return(
      <Router>
      <div className='App'>
      <Navbar/>
      </div>
      </Router>
    );
  }
}

export default App;
