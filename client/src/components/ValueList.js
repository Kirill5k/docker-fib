import React from "react";
import PropTypes from "prop-types";

const ValueList = ({ values }) => {
  return (
    <div>
      <h3>Calculated values:</h3>
      {Object.entries(values).map(([key, value]) => (
        <p key={key}>
          For index {key} I calculated {value}
        </p>
      ))}
    </div>
  );
};

ValueList.propTypes = {
  values: PropTypes.object.isRequired
};

export default ValueList;
