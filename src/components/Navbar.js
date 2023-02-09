import "./style.css";
import React from "react";
function Navbar1() {
  return (
    <>
      <nav>
        <h3 className="brand">SHow Chart</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Web Series</a>
          </li>
          <li>
            <a href="#">Upcoming</a>
          </li>
          <li>
            <a href="/signup">Register</a>
          </li>
        </ul>
        <div className="search">
          <input type="text " placeholder="Search Movie...." />
        </div>
      </nav>
    </>
  );
}

export default Navbar1;
