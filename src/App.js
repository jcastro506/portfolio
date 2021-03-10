import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Welcome from './Welcome.js'
import NavBar from './NavBar.js'
import About from './About.js'
import Projects from './Projects.js'



function App() {
  return (
    <Router>
      <div className="App">
      <Welcome />
      <NavBar />
        <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
