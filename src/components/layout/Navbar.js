import React, { Component } from 'react';

export default class Navbar extends Component {

  onclick(){
    localStorage.clear();
      window.location.replace(window.location.href.replace("home","login"));
  }

  render(){

    if(window.location.href.includes("login") || window.location.href.includes("create")){
  return (
    <nav className='navbar navbar-dark bg-dark mb-5'>
      <span className='navbar-brand mb-0 h1 mx-auto'> LyricFinder </span>
    </nav>
    )
    }else{
  return (
  <nav className='navbar navbar-dark bg-dark mb-5'>
    <span className='navbar-brand mb-0 h1 mx-auto'> LyricFinder </span>
    <button className='btn btn-primary' onClick={this.onclick}>Logout</button>
  </nav>
  )
  }
  }
}

