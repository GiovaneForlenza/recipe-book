import React from "react";
import { Link } from "react-router-dom";

import { BsArrowLeft } from "react-icons/bs";

import "../style/navigation.scss";

function Navigation() {
  return (
    <div className="navigation">
      <BsArrowLeft />
      <Link to={`/`} className="link-btn">
        See Menu
      </Link>
    </div>
  );
}

export default Navigation;
