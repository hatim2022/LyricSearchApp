import React, { Component } from 'react'

export default class registration extends Component {

    state = {
        email: "",
        password: ""
    }

  render() {
    return (
        <React.Fragment>
      <div>Create new Account</div>
      <form>
      <p>Email : </p> 
      <input 
          type="text"
          name='email'
          placeholder='email'
          required
          />
      <p>Password : </p> 
       <input
          type="password"
          name='password'
          placeholder='Password'
          required 
       />
      </form>
      </React.Fragment>
    )
  }
}
