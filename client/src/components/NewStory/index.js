import React from "react";

export function NewStoryBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-primary">
      {props.children}
    </button>
  );
}

export default NewStoryBtn;