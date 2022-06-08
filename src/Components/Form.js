import React from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

class Form extends React.Component {
  render() {
    if (this.props.signUp) {
      return <SignUp />;
    } else {
      return <LogIn />;
    }
  }
}

export default Form;
