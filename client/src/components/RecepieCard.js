import React from "react";
import Image from "./Image";
import RecepieInfo from "./RecepieInfo";

import "../style/recepie/recepie-card.scss";
import "../style/recepie/recepie-img.scss";

const Recepie = ({ recepie }) => {
  return (
    <div className="recepie-card">
      <Image img={recepie.img} />
      <RecepieInfo recepie={recepie} />
    </div>
  );
};

export default Recepie;
