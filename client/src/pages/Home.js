import React, { useState, useContext } from "react";
import Recipes from "../components/recipe/Recipes";
import Spacer from "../components/Spacer";

import { RecipesInMenuContext } from "../contexts/RecipesInMenuContext";

import "../style/home.scss";

import { BsFilterLeft } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Filters from "../components/filters/Filters";

function Home() {
  const { allRecipes, recipesInMenu } = useContext(RecipesInMenuContext);

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  function handleHamburgerClick() {
    setIsHamburgerOpen(!isHamburgerOpen);
    document
      .getElementById(`filters_container`)
      .classList.toggle("div-invisible");
  }

  <div class="tags">
    {" "}
    <svg
      aria-hidden="true"
      class="e-font-icon-svg e-far-clock"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>{" "}
    </svg>{" "}
    <span>20 minutos</span>{" "}
    <div class="tag verde">
      {" "}
      <span style="color: #0A1506">Alavancagem</span>{" "}
    </div>{" "}
  </div>;

  return (
    <main>
      <section className="menu section padding">
        <Spacer />
        <div className="page-header">
          <div className="div-menu">
            <div className="filter" onClick={handleHamburgerClick}>
              {isHamburgerOpen ? (
                <IoMdClose className="icon" />
              ) : (
                <BsFilterLeft className="icon" />
              )}
            </div>
            <div className="">
              <h2>TESTE ATUALIZADO</h2>
              {/* {!isHamburgerOpen ? <h2>Menu</h2> : <h2>Filters</h2>} */}
            </div>
          </div>
          <div className="div-filter">
            <Filters handleHamburgerClick={handleHamburgerClick} />
          </div>
        </div>
        <Recipes recipes={allRecipes} />
      </section>
    </main>
  );
}

export default Home;
