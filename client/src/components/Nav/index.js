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
          <img className="profile-pic" src="https://www.w3schools.com/howto/img_avatar.png" alt="User profile picture" />
          <div class="dropdown show">
            <a class="btn btn-secondary dropdown-toggle profileDropdown" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              My profile
              </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">View profile</a>
              <a class="dropdown-item" href="#">Logout</a>
            </div>
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Nav;
