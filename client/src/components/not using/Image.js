import React from "react";
// import recepies from '../recepies'

const Image = ({ img }) => {
  return (
    <div className="recepie-img">
      {" "}
      <img src={"../../images/cover-photos/" + img + ".jpg"} alt="" />{" "}
    </div>
  );
};

export default Image;
