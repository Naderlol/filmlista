import React from "react";

const SortByTitle = ({ sortByTitle }) => {
  return (
    <button className="btn btn-primary mt-2" onClick={sortByTitle}>
      Alfabetisk ordning
    </button>
  );
};

export default SortByTitle;
