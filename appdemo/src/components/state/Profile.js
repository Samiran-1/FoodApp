import React from 'react'
import "./Profile.css";
import {useState} from 'react';
function Profile() {
    let[state,setState]=useState("https://th.bing.com/th/id/R.cb331d845f324231c4b15f1c5f37d6f2?rik=VK2siGUsYgSxuA&riu=http%3a%2f%2fclipart-library.com%2fimages%2fBcgrngy7i.png&ehk=8ns%2f1jZXuK9pZm5B3wnt8EvUiT51v%2fuk%2f7Wxt4AlBBc%3d&risl=&pid=ImgRaw&r=0")
    let[data,setData]=useState({
        nm:"",
        email:"",
        gender:"",
        description:""
    })
    let[theme,setTheme]=useState({
        bgcolor:"",
        color:""
    }) 
    const changeTheme=(event)=>{
        
    }
    const changeToLeftContainer=()=>{
        setState("https://th.bing.com/th/id/OIP.BCkpODXjwF-xvWchOxI8gQHaE8?rs=1&pid=ImgDetMain");
        setData({
            nm:"SAMIRAN MONDAL",
            email:"samiran@gmail.com",
            gender:"MALE",
            description:"HE IS A IT PROFFETIONAL"
        })
    }
    const changeToRightContainer=()=>{
        setState("https://i.pinimg.com/736x/b5/e6/d6/b5e6d6c39a235e9f7b2ec8ef12ee565d--business-headshots-professional-headshots.jpg");
        setData({
            nm:"ARPITA SEN",
            email:"arpita@gmail.com",
            gender:"FEMALE",
            description:"SHE IS A GRAPHIC DESIGNER"
        })
    }
  return (
    <div className='mainContainer'>
      
      <div className='leftContainer'>
      <img src={state}
      height="200px"
      width="200px"
      alt='NO IMAGE'
      />
        
      </div>
      <div className='rightContainer'>
        <h2>NAME:{data.nm}</h2>
        <h2>EMAIL:{data.email}</h2>
        <h2>GENDER:{data.gender}</h2>
        <h2>DESCRIPTION:{data.description}</h2>
        <button style={{padding:"15px",backgroundColor:"black",color:"white"}} onClick={changeToLeftContainer}>SAMIRAN</button> &nbsp; &nbsp;
        <button style={{padding:"15px",backgroundColor:"black",color:"white"}} onClick={changeToRightContainer}>ARPITA</button>
        <br></br>
        <input onChange type='checkbox'/>

      </div>
    </div>
  )
}

export default Profile
