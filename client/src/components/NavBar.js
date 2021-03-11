//imports
import React from "react";
import { Link } from "react-router-dom";

//navigation for my header
export default function NavBar() {
  return (
    <div id="navBar-container">
      <Link id="navBar-links" to={"/"}>
        Home
      </Link>
      <Link id="navBar-links" to={"/Dogs"}>
        Dogs
      </Link>
      <Link id="navBar-links" to={"/Coding"}>
        Coding
      </Link>
      <Link id="navBar-links" to={"/Movies"}>
        Movies
      </Link>
    </div>
  );
}
