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
      removeCheckedCategory(checkedBoxes, category);
      updateBoxSelected("category", category, false);
    });
    ingredientCheckboxesSelected.map((ingredient) => {
      removeCheckedIngredients(checkedBoxes, ingredient);
      updateBoxSelected("ingredient", ingredient, false);
    });
  }

  function handleClick(id, caller) {
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
      if (caller === "category") {
        removeCheckedCategory(checkedBoxes, id);
      } else {
        removeCheckedIngredients(checkedBoxes, id);
      }
    }
    updateBoxSelected(caller, id, !isSelected);
  }

  function removeCheckedCategory(checkedBoxes, id) {
    checkedBoxes = categoryCheckboxesSelected.filter(
      (checkBox) => checkBox !== id
    );
    setCategoryCheckboxesSelected(checkedBoxes);
  }
  function removeCheckedIngredients(checkedBoxes, id) {
    checkedBoxes = ingredientCheckboxesSelected.filter(
      (checkBox) => checkBox !== id
    );
    setingredientCheckboxesSelected(checkedBoxes);
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
