// import logo from './logo.svg';
import './App.css';
// import Recepies from './components/Recepies'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import SingleRecepie from './pages/SingleRecepie'
import CreateRecepie from './pages/CreateRecepie';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/recepie/:id'>
          <SingleRecepie />
        </Route>
        <Route path='/create/'>
          <CreateRecepie />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
