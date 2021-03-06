import "./App.css";
import Storefront from "./pages/Storefront/Storefront.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SigninAndSignUp from "./pages/signin-and-signup/signin-and-signup.component";
import React from "react";
import { Auth } from "./firebase/firebase-utils";
import SearchPage from "./pages/search/search.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    // when the component mounts use the Auth object to set up a listener to changes to Auth state
    Auth.onAuthStateChanged((userAccount) => {
      if (userAccount) {
        const { uid, email, displayName, photoURL } = userAccount;
        // set the state of the userAccount -- null when signed out, a userAccount when signed in
        this.setState({ user: { uid, email, displayName, photoURL } });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Header user={user}></Header>

        <Switch>
          <Route exact path="/storefront" component={Storefront}></Route>
          <Route exact path="/search" component={SearchPage}></Route>
          <Route exact path="/signin" component={SigninAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
