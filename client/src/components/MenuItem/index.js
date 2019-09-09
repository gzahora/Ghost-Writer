import React from "react";
import "./style.css";

function MenuItem(props) {
    return (
        <select {...props} className="form-control genreSelect">
            <option value="Adventure">Adventure</option>
            <option value="Mystery">Mystery</option>
            <option value="Horror">Horror</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Romance">Romance</option>
            <option value="Comedy">Comedy</option>
            <option value="Action">Action</option>
        </select>
    )
}

export default MenuItem;
