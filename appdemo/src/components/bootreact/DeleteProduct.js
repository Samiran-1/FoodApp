import React, { useState } from 'react';
import axios from 'axios';

function DeleteProduct() {
    let [pid, setPid] = useState("");
    let [msg, setMsg] = useState("");

    const deleteData = () => {
        axios.delete(`http://localhost:1004/product/del/${pid}`)
            .then((res) => {
                console.log(res.data);
                setMsg(res.data);
            })
            .catch((error) => {
                console.log(error);
                setMsg("SOMETHING WENT WRONG WHILE DELETING");
            });
    };

    const refreshForm = () => {
        setPid("");
        setMsg("");  
    };

    return (
        <div style={{ width: "30%", margin: "50px auto" }}>
            <h2 className='text-danger'>DELETE PRODUCT</h2>
            <input className='form-control' type='text' placeholder='ENTER THE PRODUCT ID TO DELETE' 
                value={pid}
                onChange={(event) => {
                    setPid(event.target.value);
                }} />
            <button className='btn btn-outline-danger' onClick={deleteData}>DELETE</button>
            <button className='btn btn-outline-secondary' onClick={refreshForm}>REFRESH</button>
            <h3 className='text-warning'>{msg}</h3>
        </div>
    );
}

export default DeleteProduct;
