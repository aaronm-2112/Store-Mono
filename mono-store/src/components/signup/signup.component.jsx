import React from "react";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="form">
        <form>
          <label>Email: </label>
          <input
            value={email}
            name="email"
            type="email"
            onChange={(e) => this.handleChange(e)}
          ></input>
          <label>Password: </label>
          <input
            value={password}
            name="password"
            type="password"
            onChange={(e) => this.handleChange(e)}
          ></input>
        </form>
      </div>
    );
  }
}

export default SignUp;
