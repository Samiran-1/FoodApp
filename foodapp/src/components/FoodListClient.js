import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import NavClient from './NavClient';

function FoodListClient() {
    let[user,setUser]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:1004/food/fetch")
        .then((res)=>{
            console.log(res.data);
            setUser(res.data);
        
        })
        .catch((error)=>{
            alert("SOMETHING WENT WRONG FETCHING DATA");
            console.log(error);
        })
    },[])
return (
    <div>
        <NavClient/>
    {
        user.length>0 ? 
        <div style={{width:"30%",margin:"50px auto"}}>
        <table className='table table-hover table-striped'>
            <thead className='table-dark'>
                <tr>
                <td>FOODID</td>
                <td>NAME</td>
                <td>PRICE</td>
                
                </tr>
            </thead>
            <tbody>
                {
                    user.map((element,index)=>{
                        return(                                      
                            <tr>                         
                            <td>{element.fid}</td>
                            <td>{element.fname}</td>
                            <td>{element.price}</td>
                        
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        </div>
        :<h2 style={{color:"red"}}>NO DATA FOUND</h2>
    }
    </div>
)
}

export default FoodListClient
