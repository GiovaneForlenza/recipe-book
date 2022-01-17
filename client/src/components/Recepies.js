import React from "react";
import recepies from "../recepies";
import RecepieCard from "./RecepieCard";

import "../style/recepie/recepies.scss";

const Recepies = ({ recepies }) => {
  if (recepies.length < 1) {
    return <h1>Nothing to see here</h1>;
  }
  return (
    <div className="recepies">
      {!recepies ? <h1>No recepies found</h1> : null}
      {recepies.map((recepie) => {
        return <RecepieCard recepie={recepie} key={recepie.id} />;
      })}
    </div>
  );
};

export default Recepies;
