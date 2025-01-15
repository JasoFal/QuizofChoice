import { Link } from "react-router-dom";
import React from "react";

function Header(){
  return (
    <React.Fragment>
      <h1> Quiz of Choice</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;