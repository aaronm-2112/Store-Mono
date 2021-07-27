import "./App.css";
import Storefront from "./pages/Storefront/Storefront.component";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/header.component";
import SigninAndSignUp from "./pages/signin-and-signup/signin-and-signup.component";
import React from "react";
import Auth from "./firebase/config";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    Auth.createUserWithEmailAndPassword(
      "aaron.marroquin96@gmail.com",
      "123123"
    ).then((userCredential) => {
      this.setState({ user: userCredential.user }, () => {
        console.log(this.state);
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Router>
          <Switch>
            <Route exact path="/storefront" component={Storefront}></Route>
            <Route exact path="/signin" component={SigninAndSignUp}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
