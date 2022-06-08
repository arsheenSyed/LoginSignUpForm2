import React from "react";

class LogIn extends React.Component {
  render() {
    return (
      <div className="login p-3">
        <h1>Login</h1>

        <hr className="light" />
        <form className="pt-3">
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <div className="form-group">
            <a href="#">SignUp</a>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LogIn;
