import react from 'react';
import React, { Component } from 'react';

export default class login extends Component {

login(e){
  e.preventDefault();
  
}

  render() {
    return (

    <react.Fragment>
     <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">Welcome</h5>
              <form onSubmit={this.login(this)}>
                <div className="form-floating mb-3">
                  <input  name="email" className="form-control" placeholder="Email Address"/>
                  <label for="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input name="password" type="password" class="form-control" placeholder="password"/>
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" >Sign in</button>
                </div>
              </form>
            </div><br/>

            <div className="d-grid">
              <a href="/create" class="btn btn-primary btn-login text-uppercase fw-bold">Create Account</a>
            </div>
          </div>
        </div>
      </div>
    </react.Fragment>

    )
  }
}
