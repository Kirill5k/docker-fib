import React from "react";
import { Link } from "react-router-dom";

const OtherPage = () => {
  return (
    <div>
      <p>Im some other page</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default OtherPage;
