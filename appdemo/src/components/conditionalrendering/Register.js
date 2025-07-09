import React from 'react'

function Register({setState}) {
  return (
    <div style={{width:"30%",margin:"50px auto"}}>
      <h2>REGISTER FORM</h2>
      <input className='form-control' type='text' placeholder='ENTER THE USER ID'/>
      <input className='form-control' type='password' placeholder='ENTER THE USER PASSWORD'/>
      <input className='form-control' type='text' placeholder='ENTER THE USER NAME'/>
      <input className='form-control' type='text' placeholder='ENTER THE USER EMAIL'/>
      <button className='btn btn-outline-secondary' onClick={()=> setState(false)}>REGISTER</button>
    </div>
  )
}

export default Register
