import React from 'react'
import Child1 from './Child1'
import { useState } from 'react'
import myContext from './context';
function Parent1() {
    let[state,setState]=useState("");
    const populateData=(event)=>{
        setState(event.target.value);
    }
  return (
    <div>
        <h2>PARENT COMPONENT</h2>
        <input type='text'placeholder='ENTER THE TEXT' onChange={populateData}/>
        <myContext.Provider value={state}>
            <Child1/>
        </myContext.Provider>
        
    </div>
  )
}

export default Parent1
