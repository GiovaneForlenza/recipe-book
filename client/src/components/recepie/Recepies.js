import React from "react";
import RecepieCard from "../not using/RecepieCard";

import "../../style/recepie/recepies.scss";
import Header from "./Header";

const Recepies = ({ recepies }) => {
  if (recepies.length < 1) {
    return <h1>Nothing to see here</h1>;
  }
  return (
    <div className="recepies">
      {!recepies ? <h1>No recepies found</h1> : null}
      {recepies.map((recepie) => {
        return (
          <Header recepie={recepie} key={recepie.id} caller={"Recepies"} />
        );
      })}
    </div>
  );
};

export default Recepies;
