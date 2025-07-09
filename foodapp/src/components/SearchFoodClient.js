import React from 'react'
import NavClient from './NavClient';
import { useState } from 'react';
import axios from 'axios';

function SearchFoodClient() {
    let [food, setFood] = useState({
        fid: ""
    });
    let [msg, setMsg] = useState("");
    let[data,setData]=useState({
      fid:"",
      fname:"",
      price:""
    })
    
    const searchData = (fid) => {
        alert(fid);
    
        axios.get(`http://localhost:1004/food/fetch/${fid}`)
            .then((res) => {
                console.log(res.data);
              setData(res.data);
                
            })
            .catch((error) => {
                console.log(error);
                console.log("SOMETHING WENT WRONG ADD DATA");
            });
    };
    
    const refreshForm = () => {
        setFood({
            fid: ""
        });
        setMsg("");
    };
    
    return (
        <div>
            <NavClient/>
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
            
            <h2 style={{ textAlign: 'center' }}>Give ID to Search Food Details </h2>
            <form  style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input 
                    type="text" 
                    name="fid" 
                    placeholder="Food Id" 
                    value={food.fid} 
                    onChange={(event) => setFood({ ...food, fid: event.target.value })}
                    style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <button onClick={()=>{
                  searchData(food.fid);
                }} type="button" style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Search Data
                </button>
    
                <button onClick={refreshForm} style={{ marginTop: '20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', padding: '5px', cursor: 'pointer' }}>
                Refresh
            </button>
            <table>
              <thead>
                <tr>
                  <td>FID</td>
                  <td>FOOD NAME</td>
                  <td>PRICE</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>{data.fid}</td>
                <td>{data.fname}</td>
                <td>{data.price}</td>
                </tr>
              </tbody>
            </table>
            </form>
            
            
    
            {msg && <p style={{ textAlign: 'center', color: 'green' }}>{msg}</p>}
        </div>
        </div>
    );
}

export default SearchFoodClient

