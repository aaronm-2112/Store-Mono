import React from "react";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

import "./signing-and-signup.styles.scss";

const SigninAndSignUp = () => (
  <div className="sign-in-and-sign-out">
    <SignUp className="signup"></SignUp>
    <SignIn className="signin"></SignIn>
  </div>
);

export default SigninAndSignUp;
