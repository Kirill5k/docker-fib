import React from "react";
import PropTypes from "prop-types";

const IndexList = ({ indexes }) => {
  return (
    <div>
      <h3>Indexes I have seen:</h3>
      <p>{indexes.map(({ number }) => number).join(", ")}</p>
    </div>
  );
};

IndexList.propTypes = {
  indexes: PropTypes.array.isRequired
};

export default IndexList;
