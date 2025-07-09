import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';
function DeleteFood() {
  let [food, setFood] = useState({
    fid: ""
});
let [msg, setMsg] = useState("");

const deleteData = (fid) => {
    

    axios.delete(`http://localhost:1004/food/del/${fid}`)
        .then((res) => {
            console.log(res.data);
            setMsg(res.data);
            
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
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
        <Nav/>
        <h2 style={{ textAlign: 'center' }}>Give ID to Delete Food Items </h2>
        <form  style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input 
                type="text" 
                name="fid" 
                placeholder="Food Id" 
                value={food.fid} 
                onChange={(event) => setFood({ ...food, fid: event.target.value })}
                style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <button onClick={()=>{deleteData(food.fid)}} type="button" style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Delete Food
            </button>
            <button onClick={refreshForm} style={{ marginTop: '20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', padding: '5px', cursor: 'pointer' }}>
            Refresh
        </button>
        </form>
        
        

        {msg && <p style={{ textAlign: 'center', color: 'green' }}>{msg}</p>}
    </div>
);
}

export default DeleteFood
