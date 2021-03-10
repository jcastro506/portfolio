import React from 'react' 
import { Link } from "react-router-dom";


function NavBar () {
    return (
        <div className="navBar">
            <nav>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
            </nav>
        </div>
    )
}



export default NavBar