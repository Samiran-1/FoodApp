import React from 'react'
import { useState } from 'react'
function StateDemo() {
    let[state,setState]=useState("https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png")
    const changeToAngular=()=>{
        setState("https://th.bing.com/th/id/OIP.JWcKdjkJlUbPCu8Z2lKHzgHaH3?rs=1&pid=ImgDetMain");
    }
    const changeToReact=()=>{
        setState("https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png");
    }
  return (
    <div>
      <img src={state}
      height="200px"
      width="200px"
      alt='NO IMAGE'
      />
      <button onClick={changeToAngular}>ANGULAR</button> &nbsp; &nbsp;
      <button onClick={changeToReact}>REACT JS</button>

    </div>
  )
}

export default StateDemo
