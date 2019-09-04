import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Card(props) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 px-1 py-1">
      <div className="card" {...props} tabIndex="0">
        <a href="#">
          <div className="card-header">
            <div className="card-title h5">Story Title</div>
            <div className="card-subtitle text-gray">#Genre</div>
          </div>
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      </div>
        </a>
        <div className="card-footer">
          <img className="profile-pic" src="https://www.w3schools.com/howto/img_avatar.png" alt="User profile picture" />
          <p className="username">Username goes here</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
