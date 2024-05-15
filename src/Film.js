import React from "react";
import StarRating from "./StarRating";

<StarRating />;

export default function Film(props) {
  return (
    <li className="list-group-item">
      <div className="film-container">
        <div>
          <h5>{props.item.title}</h5>
          <StarRating rating={props.item.rating} /> {}
        </div>
        <button className="btn" onClick={() => props.deleteItem(props.item.id)}>
          <img src="delete.png" alt="Delete" className="delete-icon" />
        </button>
      </div>
    </li>
  );
}
