import React, { useState } from 'react';
import axios from 'axios';
function Register() {
  let [register, setRegister] = useState({
          uname: "",
          pass: "",
          name: "",
          phno:"",
          email:""
      });
      let [msg, setMsg] = useState("");
      const addData = (e) => {
        //e.preventDefault(); // Prevent page refresh on submit

        axios.post("http://localhost:1004/register/add", register)
            .then((res) => {
                console.log(res.data);
                setMsg(res.data);
                //refreshForm(); // Clear form after submission
            })
            .catch((error) => {
                console.log(error);
                console.log("SOMETHING WENT WRONG ADD DATA");
            });
    };

    const refreshForm = () => {
        setRegister({
          uname: "",
          pass: "",
          name: "",
          phno:"",
          email:""
        });
        setMsg("");
    };
  return (
    <div style={{width:"30%",margin:"30px auto"}}>
      <h2 className='text-white bg-dark'>REGISTRATION FORM</h2>
      <input className='form-control' type='text' placeholder='ENTER THE USERNAME'
        value={register.uname}
        onChange={(event)=>{
          setRegister({
            ...register,
            uname:event.target.value
          })
        }}
      />
      <input className='form-control' type='password' placeholder='ENTER THE PASSWORD'
        value={register.pass}
        onChange={(event)=>{
          setRegister({
            ...register,
            pass:event.target.value
          })
        }}
      />
       <input className='form-control' type='text' placeholder='ENTER THE NAME'
        value={register.name}
        onChange={(event)=>{
          setRegister({
            ...register,
            name:event.target.value
          })
        }}
      />
      <input className='form-control' type='text' placeholder='ENTER THE PHONE NUMBER'
        value={register.phno}
        onChange={(event)=>{
          setRegister({
            ...register,
            phno:event.target.value
          })
        }}
      />
      <input className='form-control' type='text' placeholder='ENTER THE EMAIL'
        value={register.email}
        onChange={(event)=>{
          setRegister({
            ...register,
            email:event.target.value
          })
        }}
      />
      <button className='btn btn-outline-secondary' onClick={addData}>REGISTER</button> &nbsp;&nbsp;
      <button className='btn btn-outline-danger' onClick={refreshForm}>REFRESH</button>
      <h3 className='text-primary'>{msg}</h3>
    </div>
  )
}

export default Register
