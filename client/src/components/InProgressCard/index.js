import React from "react";
import "./style.css";

function InProgressCard(props) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 px-1 py-2">
      <div className="card" {...props} tabIndex="0">
        <a href={props.link}>
          <div className="card-header">
            <div className="row">
              <div className="card-title h5">{props.title}</div>
            </div>
            <div className="row">

              <div className="card-subtitle text-gray">{props.genre}</div>
            </div>
          </div>
          <div className="card-body">
            {props.setting}
          </div>
        </a>
        <div className="card-footer">
          <img className="profile-pic" src="https://www.w3schools.com/howto/img_avatar.png" alt="User profile pic" />
          <p className="username">Username goes here</p>
        </div>
      </div>
      <div class="progress" style={{ marginTop: "5px" }}>
        <div className="progress-bar" role="progressbar" style={{ width: "20%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">20%</div>
      </div>
    </div>
  );
}

export default InProgressCard;
