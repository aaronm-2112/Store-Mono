import "./App.css";
import Storefront from "./pages/Storefront/Storefront.component";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/header.component";
import SigninAndSignUp from "./pages/signin-and-signup/signin-and-signup.component";

function App() {
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

export default App;
