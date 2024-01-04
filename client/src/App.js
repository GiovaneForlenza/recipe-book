import "./App.css";
import "./style/global.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import CreateRecipe from "./pages/CreateRecipe";

import "bootstrap/dist/css/bootstrap.min.css";

import { FiltersContextProvider } from "./contexts/FiltersContext";
import { RecipesInMenuContextProvider } from "./contexts/RecipesInMenuContext";
import { RecipeInfoContextProvider } from "./contexts/RecipeInfoContext";
import RandomRecipes from "./pages/RandomRecipes";
function App() {
  return (
    <RecipeInfoContextProvider>
      <FiltersContextProvider>
        <RecipesInMenuContextProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/recipe/:id">
                <RecipePage />
              </Route>
              <Route path="/create/">
                <CreateRecipe />
              </Route>
              <Route path="/random-recipes">
                <RandomRecipes />
              </Route>
            </Switch>
          </Router>
        </RecipesInMenuContextProvider>
      </FiltersContextProvider>
    </RecipeInfoContextProvider>
  );
}

export default App;
