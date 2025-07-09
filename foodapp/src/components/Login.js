import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
        let [login, setLogin] = useState({
            uname: "",
            pass: ""
        });
        var navigate=useNavigate();
        let [msg, setMsg] = useState("");
        const checkLogin = (uname,pass) => {
              //e.preventDefault(); // Prevent page refresh on submit
  
              axios.get(`http://localhost:1004/register/login/${uname}/${pass}`)
              .then((res) => {
                  console.log(res.data);
                  if(uname==='admin' && pass==='admin')
                  {
                      navigate("/nav");
                  }
                  else{
                      if(res.data==='LOGIN SUCCESSFULLY')
                      {
                        navigate("/navclient");
                      }
                      else
                      {
                          setMsg(res.data);
                          //refreshForm(); // Clear form after submission
                      }
                  }
              })
              .catch((error) => {
                console.log(error);
                console.log("SOMETHING WENT WRONG ADD DATA");
              });
        };
  return (
    <div style={{width:"30%",margin:"30px auto"}}>
      <h2 className='text-primary' style={{textDecoration:"underline"}}>LOGIN FORM</h2>
      <input className='form-control' type='text' placeholder='ENTER THE USERNAME'
      value={login.uname}
      onChange={(event)=>{
        setLogin({
          ...login,
          uname:event.target.value
        })
      }}
      />
      <input className='form-control' type='password' placeholder='ENTER THE PASSWORD'
        value={login.pass}
        onChange={(event)=>{
          setLogin({
            ...login,
            pass:event.target.value
          })
        }}
      />
      <button className='btn btn-outline-secondary'
      onClick={()=>{
        checkLogin(login.uname,login.pass)
      }}
      >LOGIN</button>
      <h3 className='text-primary'>{msg}</h3>
    </div>
  )
}

export default Login
