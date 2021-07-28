import React from "react";
import { Auth, provider } from "../../firebase/firebase-utils";

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
  }

  googleSignIn() {
    Auth.signInWithPopup(provider).then((result) => {
      console.log(result);
      var credential = result.credential;
      var token = result.accessToken;
    });
  }

  render() {
    return (
      <div>
        <form
          method="post"
          onSubmit={(e) => {
            this.onSubmit(e);
          }}
        >
          <label for="email">Email: </label>
          <input value={this.email} name="email" id="email" required></input>
          <label for="password">Password: </label>
          <input value={this.password}></input>

          <button type="submit" value="Sign In">
            Sign In
          </button>

          <button onClick={() => this.googleSignIn()}>
            Sign In With Google
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
