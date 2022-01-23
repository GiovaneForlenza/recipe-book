import React, { useState } from "react";
import Recipes from "../components/recipe/Recipes";
import recipes from "../recepies";
import Categories from "../components/Categories";
import Spacer from "../components/Spacer";

import "../style/home.scss";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSwitch } from "react-icons/io";

const allCategories = [
  "all",
  ...new Set(recipes.map((recipes) => recipes.category)),
];

function Home() {
  const [categories, setCategories] = useState(allCategories);
  const [itemsInMenu, setItemsInMenu] = useState(recipes);
  const [selectedCategoryBtn, setSelectedCategoryBtn] = useState(0);
  const [selectedIngredientBtn, setSelectedIngredientBtn] = useState(null);
  const [ingredients, setIngredients] = useState([
    "chicken",
    "beef",
    "pork",
    "pasta",
    "potato",
  ]);
  const [isAllSelected, setIsAllSelected] = useState(true);
  const [prevIndex, setPrevIndex] = useState(-1);
  const [prevSelectedCategory, setPrevSelectedCategory] = useState("");
  const [prevSelectedIngredient, setPrevSelectedIngredient] = useState("");

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  // Deals with the buttons to change the categories / ingredients shown
  // Category - Title of the category pressed
  // Index - Index of the btn pressed
  // Ingredient - Title of the ingredient pressed. Undefined by default
  const filterItems = (category, index, ingredient) => {
    category === "all" ? setIsAllSelected(true) : setIsAllSelected(false);
    // Checks if the btn selected is not 'All', and if the current press is the same as the previous
    // Works for both the categories and ingredients btn
    // If true, change the category to All, triggering all the items to be shown

    if (
      (!isAllSelected && allCategories.indexOf(category) === prevIndex) ||
      (!isAllSelected && ingredients.indexOf(ingredient) === prevIndex)
    ) {
      category = "all";
    }

    typeof ingredient !== "undefined"
      ? setPrevSelectedIngredient(index)
      : setPrevSelectedCategory(index);

    // Shows all the items
    if (category === "all") {
      setItemsInMenu(recipes);
      setSelectedCategoryBtn(0);
      setSelectedIngredientBtn(null);
      setPrevIndex(-1);
      setIsAllSelected(true);
      setPrevSelectedIngredient("");
      setPrevSelectedCategory("");
      return;
    }

    // If any other btn was pressed
    let newRecepies = [];

    if (prevSelectedCategory && prevSelectedIngredient) {
    }

    // If the btn was an ingredient
    if (typeof ingredient !== "undefined") {
      // Search for the ingredients in all the recepies
      recipes.forEach((recepie) => {
        // If the recepie has the ingredient pressed, add to the array
        recepie.ingredients.forEach((recIngredient) => {
          if (recIngredient.includes(ingredient)) {
            newRecepies.push(recepie);
          }
        });
      });
      setSelectedIngredientBtn(index);
      setSelectedCategoryBtn(null);
    } else {
      // Add all recepies with the same category to the array
      newRecepies = recipes.filter((recepie) => recepie.category === category);
      setSelectedCategoryBtn(index);
      setSelectedIngredientBtn(null);
    }
    // }
    setPrevIndex(index);
    setItemsInMenu(newRecepies);
  };

  function handleHamburgerClick() {
    setIsHamburgerOpen(!isHamburgerOpen);
  }

  function closeHamburgerMenu() {
    handleHamburgerClick();
  }

  return (
    <main>
      <section className="menu section padding">
        <Spacer />
        <div className="page-header">
          <div className="div-menu">
            <div className="filter" onClick={handleHamburgerClick}>
              <IoMdSwitch className="icon" />
            </div>
            <div className="">
              <h2>Menu</h2>
            </div>
          </div>
          {isHamburgerOpen ? (
            <div className="div-filter">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search..."
                className="input-search"
              />
              <Categories
                categories={categories}
                ingredients={ingredients}
                filterItems={filterItems}
                categoryBtn={selectedCategoryBtn}
                ingredientBtn={selectedIngredientBtn}
                onClick={handleHamburgerClick}
              />
            </div>
          ) : null}
        </div>
        <Recipes recipes={itemsInMenu} />
      </section>
    </main>
  );
}

export default Home;
