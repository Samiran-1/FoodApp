import React from 'react'
import "./Nav.css"
function Nav() {
  return (
    <div className='navContainer' >
      <div className='leftContainer'>
        <h2>MY APP</h2>
      </div>
      <div className='rightContainer'>
        <a href='/food'>FOOD</a>
        <a href='/profile'>PROFILE</a>
        <a href='/contact'>CONTACT-US</a>
        
      </div>
    </div>
  )
}

export default Nav
