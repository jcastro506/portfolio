import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Welcome from './Welcome.js'
import NavBar from './NavBar.js'
import About from './About.js'
import Projects from './Projects.js'




function App() {
  return (
    <div className="App">
    {/* <NavBar /> */}
    <Router>
      <div className="App">
      <Route exact path="/" >
      <Welcome />
      </Route>
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
    </div>
  );
}

export default App;
