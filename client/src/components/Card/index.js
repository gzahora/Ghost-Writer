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
            <div className="row">
              <div className="col-9">
                <div className="card-title h5">{props.title}</div>
                <div className="card-subtitle text-gray">{props.genre}</div>
              </div>
              <div className="col-3">
                <button className="delete-btn"><i className="fa fa-trash"></i></button>
              </div>
            </div>
          </div>
          <div className="card-body">
            {props.body}
          </div>
        </a>
        <div className="card-footer">
          <img className="profile-pic" src="https://www.w3schools.com/howto/img_avatar.png" alt="User profile pic" />
          <p className="username">Username goes here</p>
        </div>
      </div>
      <div class="progress" style={{ marginTop: "5px" }}>
        <div className="progress-bar" role="progressbar" style={{ width: "20%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">20%</div>
      </div>
    </div>
  );
}

export default Card;
