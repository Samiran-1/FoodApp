import React from 'react'
import myContext from './context'
import { useContext } from 'react'
function Child3() {
    var data=useContext(myContext);
  return (
    <div>
      <h2>CHILD-3 COMPONENT</h2>
      <p>{data}</p>
    </div>
  )
}

export default Child3
