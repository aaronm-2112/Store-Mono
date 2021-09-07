import React from "react";
import { Auth } from "../../firebase/firebase-utils";
import { Link, withRouter } from "react-router-dom";
import SearchBar from "../search-bar/search-bar.component";

import "./header.styles.scss";

const Header = ({ user, history }) => {
  return (
    <div className="header">
      <img
        src="scribble-heart.svg"
        alt="heart-logo"
        className="logo"
        onClick={() => {
          history.push("/storefront");
        }}
      />
      <SearchBar />
      {user ? (
        <button onClick={() => Auth.signOut()}>Sign Out</button>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
    </div>
  );
};

export default withRouter(Header);
