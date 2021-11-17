import './App.css';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

import PrincipalPage from './webpages/pageprincipale';
import Favorites from './webpages/favorites';
import Home from './webpages/home';


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <PrincipalPage /> },
    { path: "/favorites", element: <Favorites /> },
    { path: "/home", element: <Home /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;