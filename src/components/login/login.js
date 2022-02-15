import axios from 'axios';
import react from 'react';
import React, { Component , useState } from 'react';
import { Redirect } from 'react-router-dom';

export default class login extends Component {

  state = {
    user:{email:"",password:""},
    login:false
  }

componentDidMount(){
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      this.setState({
        user:loggedInUser,
        login:true
      })
    }
  }

login(event){
  event.preventDefault(); 
  axios.post('http://localhost:8080/api/users', {
    email: this.state.user.email,
    password: this.state.user.password
  })
  .then((res) => {
    if(res.status== 200 ){
      this.setState({
        user:{
          email:res.data.email,
          password:res.data.password
        }
      })
     localStorage.setItem('user',this.state.user);
      window.location.replace(window.location.href.replace("login","home"));
    }

  })
  .catch(
    err => {
      console.log(err)
    }
  )
}

onChange(e){
  if(e.target.name=="email"){
    this.setState({
     user:{
       email:e.target.value,
       password:this.state.user.password
     }
    })
    
  }else{
    this.setState({
      user:{
        email:this.state.user.email,
        password:e.target.value
      }
    })
  }
}



  render() {

    if(this.state.login){
      return <Redirect to='/home'  />
    } 
    else{
    return (
    <react.Fragment>
     <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">Welcome</h5>
              <form onSubmit={this.login.bind(this)}>
                <div className="form-floating mb-3">
                  <input  
                  name="email"
                  id="email"
                  value={this.state.user.email} 
                  className="form-control" 
                  placeholder="Email Address"
                  onChange={this.onChange.bind(this)}
                  />
                  <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                  name="password"
                  id="password"
                  value={this.state.user.password} 
                  type="password" 
                  className="form-control" 
                  placeholder="password"
                  onChange={this.onChange.bind(this)}   
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary btn-login text-uppercase fw-bold"  type="submit" >Sign in</button>
                </div>
              </form>
            </div><br/>

            <div className="d-grid">
              <a href="/create" className="btn btn-primary btn-login text-uppercase fw-bold">Create Account</a>
            </div>
          </div>
        </div>
      </div>
    </react.Fragment>

    )
    }
  }
}
