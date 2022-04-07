import React, { useState, createContext } from "react";

export const FiltersContext = createContext();
export const FiltersContextProvider = (props) => {
  const [categoryCheckboxesSelected, setCategoryCheckboxesSelected] = useState(
    []
  );
  const [ingredientCheckboxesSelected, setingredientCheckboxesSelected] =
    useState([]);

  let checkedBoxes;

  function resetFilters() {
    categoryCheckboxesSelected.map((category) => {
      removeCheckedBox(checkedBoxes, category, "category");
      updateBoxSelected("category", category, false);
    });
    ingredientCheckboxesSelected.map((ingredient) => {
      removeCheckedBox(checkedBoxes, ingredient, "ingredient");
      updateBoxSelected("ingredient", ingredient, false);
    });
  }

  function handleClick(id, caller, category) {
    let isSelected;
    if (caller === "category") {
      isSelected = categoryCheckboxesSelected.includes(id);
    } else {
      isSelected = ingredientCheckboxesSelected.includes(id);
    }

    if (!isSelected) {
      if (caller === "category") {
        setCategoryCheckboxesSelected([...categoryCheckboxesSelected, id]);
      } else {
        setingredientCheckboxesSelected([...ingredientCheckboxesSelected, id]);
      }
    } else {
      removeCheckedBox(checkedBoxes, id, caller);
    }
    updateBoxSelected(caller, id, !isSelected);
  }

  function removeCheckedBox(checkedBoxes, id, caller) {
    checkedBoxes =
      caller === "category"
        ? categoryCheckboxesSelected
        : ingredientCheckboxesSelected;
    checkedBoxes = checkedBoxes.filter((checkBox) => checkBox !== id);
    caller === "category"
      ? setCategoryCheckboxesSelected(checkedBoxes)
      : setingredientCheckboxesSelected(checkedBoxes);
  }

  function updateBoxSelected(caller, id, state) {
    document.getElementById(
      `${caller === "category" ? "category-" : "ingredient-"}${id}`
    ).checked = state;
  }

  return (
    <FiltersContext.Provider
      value={{
        categoryCheckboxesSelected,
        ingredientCheckboxesSelected,
        handleClick,
        updateBoxSelected,
        resetFilters,
      }}
    >
      {props.children}
    </FiltersContext.Provider>
  );
};
