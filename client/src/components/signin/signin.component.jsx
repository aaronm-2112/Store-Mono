import React from "react";
import { Auth, provider } from "../../firebase/firebase-utils";
import { withRouter } from "react-router-dom";

import "./signin.styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  onSubmit(e) {
    e.preventDefault();

    Auth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() =>
        // move to the dashboard
        this.props.history.push("/")
      )
      .catch((err) => alert(err.message));
  }

  googleSignInPopup() {
    Auth.signInWithPopup(provider)
      .then(() => {
        // move to the dashboard
        this.props.history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="signin">
        <form
          method="post"
          onSubmit={(e) => {
            this.onSubmit(e);
          }}
        >
          <label for="email">Email: </label>
          <input
            type="email"
            value={this.email}
            name="email"
            id="email"
            onChange={(e) => this.handleChange(e)}
            required
          ></input>
          <label for="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.password}
            onChange={(e) => this.handleChange(e)}
            required
          ></input>

          <button type="submit" value="Sign In">
            Sign In
          </button>

          <button onClick={() => this.googleSignInPopup()}>
            Sign In With Google
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
