import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Inicio from './components/Inicio';
import User from './components/User';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
    <div className="container mt-3">
      <div className="btn-group">
        <Link to="/" className="btn btn-dark">
          Home
        </Link>

        <Link to="/nosotros" className="btn btn-dark">
          Nosotros
        </Link>

        <NavLink to="/contacto" className="btn btn-dark" activeClassName="active">
          Contacto
        </NavLink>
      </div>

      <hr />
      
      <Switch>
        <Route path="/nosotros/:id">
          <User />
        </Route>
        <Route path="/blog/:slug">
          <BlogPost />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
        <Route path="/nosotros">
          <Nosotros />
        </Route>
        <Route path="/" exact>
          <Inicio />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
