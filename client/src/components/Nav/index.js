import React from "react";
import "./style.css";

function Nav() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container">
        <div className="d-flex justify-content-start">
          <a className="navbar-brand" href="/">Ghost Writer</a>
          <a className="nav-item nav-link" href="#">In-progress stories</a>
          <a className="nav-item nav-link" href="#">Complete stories</a>
        </div>

        <div className="d-flex justify-content-end">

          <a href="#">
            <img className="profile-pic" src="https://www.w3schools.com/howto/img_avatar.png" alt="User profile picture" />
          </a>
          <div class="dropdown">
            <a href="#" class="btn btn-link dropdown-toggle" tabindex="2">My Profile<i class="icon icon-caret"></i>
            </a>
            <ul class="menu"></ul>
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Nav;
