import React from "react";
import "./styles.css";
import {UserContext} from './UserContext'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Navlink
} from "react-router-dom";
import  Index  from './pages';
import  About  from './pages/about';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Route path="/about/" component={About} />
     <UserContext.Provider value="hello">
     <Route path="/" component={Index} />
       
       </UserContext.Provider>
      </div>
    </Router>
  );
}
