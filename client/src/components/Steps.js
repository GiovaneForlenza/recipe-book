import React from "react";
import Division from "./Division";
import ItemsList from "./ItemsList";

const Steps = ({ recepie }) => {
  const [steps, setSteps] = React.useState(recepie.steps);
  return (
    <>
      <Division text="Steps" />
      <ItemsList items={steps} isOl />
    </>
  );
};

export default Steps;
