import React from 'react'
import { Link } from "react-router-dom"
import { scaleRotate as Menu } from 'react-burger-menu'

const ReactRotatingText = require('react-rotating-text');

// function showSettings (event) {
//     event.preventDefault();
//   }

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#FFFFFF'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

function Welcome (){
    return (
        <div className="welcome">
        <ReactRotatingText classname="react-rotating-text-cursor" items={['Welcome To My Site', "I'm Thrilled That You're Here", 'Feel Free To Scroll Through']} />
            <div className="hamburger">
                <Menu styles={styles}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <a target="_blank" href="https://github.com/jcastro506">Github</a>
                    <a target="_blank" href="https://www.linkedin.com/in/joshua-castro/">LinkedIn</a>
                </Menu>
            </div>
        </div>
    )
}



export default Welcome 