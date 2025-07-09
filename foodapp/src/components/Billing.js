import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import NavClient from './NavClient'
function Billing() {
    let[user,setUser]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:1004/order/billing")
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
                <td>ORDER ID</td>
                <td>ORDER DATE</td>
                <td>FOOD ID</td>
                <td>FOOD NAME</td>
                <td>ORDER QUANTITY</td>
                <td>PRICE</td>
                <td>NET PRICE</td>
                <td>USER NAME</td>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((element,index)=>{
                        return(                                      
                            <tr>                         
                            <td>{element[0]}</td>
                            <td>{element[1]}</td>
                            <td>{element[2]}</td>
                            <td>{element[3]}</td>
                            <td>{element[4]}</td>
                            <td>{element[5]}</td>
                            <td>{element[6]}</td>
                            <td>{element[7]}</td>
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

export default Billing
