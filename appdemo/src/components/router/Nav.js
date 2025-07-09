import React from 'react'
import "./Nav.css"
function Nav() {
  return (
    <div className='navContainer'>
      <div className='leftContainer'>
        <h2>MY APP</h2>
      </div>
      <div className='rightContainer'>
        <a href='/state'>STATE</a>
        <a href='/profile'>PROFILE</a>
        <a href='/props'>PROPS</a>
        <a href='/propsdrilling'>PROPSDRILLING</a>
        <a href='/context'>CONTEXT</a>
        <a href='/axios'>AXIOS</a>
        <a href='/useeffect'>USEEFFECT</a>
        <a href='/condrend'>CONDRENDERING</a>
        <a href='/preport'>PRODUCT REPORT</a>
        <a href='/addproduct'>ADD PRODUCT</a>
        <a href='/deleteproduct'>DELETE PRODUCT</a>
        <a href='/product'>PRODUCT</a>
      </div>
    </div>
  )
}

export default Nav
