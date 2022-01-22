import React from "react";

const ItemsList = ({ items, isOl }) => {
  return (
    <div className="items-list">
      {isOl ? (
        <ol>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ol>
      ) : (
        <>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </>
      )}
    </div>
  );
};

export default ItemsList;
