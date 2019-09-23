import React from "react";
import "./style.css";

function InProgressCard(props) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-auto px-1 py-2">
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
          <img className="profile-pic" src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/pencil-512.png" alt="User profile pic" />
          <p className="username">{props.username}</p>
        </div>
      </div>
      <div className="progress" style={{ marginTop: "5px" }}>
        <div className="progress-bar" role="progressbar" style={{ width: `${props.progress}` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{props.progress}</div>
      </div>
    </div>
  );
}

export default InProgressCard;
