import axios from 'axios';
import React, { Component } from 'react'

export default class registration extends Component {

    state = {
        email: "",
        password: "",
        password2:""
    }

  createAccount(event){
  event.preventDefault();

  if(!(this.state.password==this.state.password2)){
  alert("password does not match ")
  return
  }

  axios.post("http://localhost:8080/api/users/create",{
    email: this.state.email,
    password: this.state.password
  }).then(
    (res)=>{
      if(res.status==200){
        alert("account created")
        window.location.replace(window.location.href.replace("create","login"));
      }
    }
  )
  }  

  onChange(e){
     if(e.target.name=="email"){
       this.setState({
         email:e.target.value
       })
     }else if(e.target.name=="password"){
      this.setState({
        password:e.target.value
      })
     }else{
      this.setState({
        password2:e.target.value
      })
     }
  }

  render() {
    return (
        <React.Fragment>
      <div>Create new Account</div>
      <form onSubmit={this.createAccount.bind(this)}>
      <p>Email : </p> 
      <input 
          type="text"
          name='email'
          placeholder='email'
          onChange={this.onChange.bind(this)}
          required
          />
      <p>Password : </p> 
       <input
          type="password"
          name='password'
          onChange={this.onChange.bind(this)}
          placeholder='Password'
          required 
       />
       <br/>
      <p>Repeat Password : </p> 
       <input
          type="password"
          name='password2'
          onChange={this.onChange.bind(this)}
          placeholder='Password'
          required 
       />
       <br/><br/>
       <button type="submit" className="btn btn-success">Sign Up</button>
      </form>
      </React.Fragment>
    )
  }
}
