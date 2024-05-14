import React from "react";

function StarRating({ rating }) {
  const stars = [];
  const starImage = <img src="star.png" alt="star" className="star-icon" />;
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(starImage);
    } else {
      stars.push(<span key={i}>&nbsp;</span>);
    }
  }
  return <div>{stars}</div>;
}

export default StarRating;
