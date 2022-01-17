import React from "react";
import { Link } from "react-router-dom";
import SingleRecepieInfo from "./SingleRecepieInfo";
import "../style/global.scss";

const RecepieInfo = ({ recepie }) => {
  return (
    <section className="recepie-info">
      <SingleRecepieInfo recepie={recepie} />
      <Link to={`/recepie/${recepie.id}`} className="link-btn">
        Full Recepie
      </Link>
    </section>
  );
};

export default RecepieInfo;
