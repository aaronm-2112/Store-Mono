import React from "react";
import { Auth } from "../../firebase/firebase-utils";
import { Link, withRouter } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <div>
      {user ? (
        <button onClick={() => Auth.signOut()}>Sign Out</button>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
    </div>
  );
};

export default withRouter(Header);
