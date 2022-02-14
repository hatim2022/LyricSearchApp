import {BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';

import { Provider } from './context'
import './App.css';
import login from './components/login/login';
import registration from './components/login/registration';


class App extends Component {
  render(){
    return(
      <Provider>
      <Router>
      <React.Fragment>
       <Navbar/>
       <div className="container">
         <Switch>
           <Route exact path='/login' component={login}/>
           <Route exact path='/home' component={Index}/>
           <Route exact path='/lyrics/track/:id' component={Lyrics}/>
           <Route exact path='/create' component={registration}/>
         </Switch>
       </div>
      </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
