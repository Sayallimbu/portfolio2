import React from 'react'
import "../../App.css"
function Navbar() {
  return (
 <>
  <div className="pc_nav">
        <div className="topic">
          <div>
            <a className="logo" href="#">Sayal Subba</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#experience">Experience</a>
          </div>

          <a href=""><i className="fa-solid fa-magnifying-glass fa-1x"></i></a>
        </div>
      </div>

      <div className="mobile_nav">
        <a className="logo" href="index.html">Sayal Subba</a>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
 </>
  )
}

export default Navbar