import React from "react";
import { Auth } from "../../firebase/firebase-utils";

import "./signup.syles.scss";

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

  handleSubmit(e) {
    // prevent the default behaviour
    e.preventDefault();

    // sign up the user with email and password
    Auth.createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    ).catch((error) => alert(error.message));
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="signup">
        <form method="post" onSubmit={(e) => this.handleSubmit(e)}>
          <label for="email">Email: </label>
          <input
            value={email}
            name="email"
            type="email"
            id="email"
            required
            onChange={(e) => this.handleChange(e)}
          ></input>
          <label for="password">Password: </label>
          <input
            value={password}
            name="password"
            id="password"
            type="password"
            minLength="6"
            required
            onChange={(e) => this.handleChange(e)}
          ></input>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
