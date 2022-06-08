import React from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

class Form extends React.Component {
  state = {
    isTrue: false,
  };

  handleClick() {
    this.setState();
  }
  render() {
    if (this.state.isTrue) {
      return <SignUp />;
    } else {
      return <LogIn />;
    }
  }
}

export default Form;
