import React from "react";

const SortByRating = ({ sortByRating }) => {
  return (
    <button className="btn btn-primary mx-2 mt-2" onClick={sortByRating}>
      Betygsordning
    </button>
  );
};

export default SortByRating;
