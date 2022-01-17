import "./App.css";
import "./style/global.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import RecepiePage from "./pages/RecepiePage";
import CreateRecepie from "./pages/CreateRecepie";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/recepie/:id">
          <RecepiePage />
        </Route>
        <Route path="/create/">
          <CreateRecepie />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
