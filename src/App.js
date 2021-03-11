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
    <div style={{ 
      backgroundImage: `url("https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fbackgrounds%2Fnature%2Fstar&psig=AOvVaw2fGKuQunHyzBnetXTzpJms&ust=1615515204210000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjYpPKYp-8CFQAAAAAdAAAAABAD")` 
    }}>
    <Router>
      <div className="App">
      <Route exact path="/" >
      <Welcome />
      </Route>
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
    </div>
  );
}

export default App;
