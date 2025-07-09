import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';

function AddFood() {
    let [product, setProduct] = useState({
        fid: "",
        fname: "",
        price: ""
    });
    let [msg, setMsg] = useState("");

    const addData = (e) => {
        //e.preventDefault(); // Prevent page refresh on submit

        axios.post("http://localhost:1004/food/add", product)
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
        setProduct({
            fid: "",
            fname: "",
            price: ""
        });
        setMsg("");
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
            <Nav/>
            <h2 style={{ textAlign: 'center' }}>Add Food Items</h2>
            <form  style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input 
                    type="text" 
                    name="fid" 
                    placeholder="Food Id" 
                    value={product.fid} 
                    onChange={(event) => setProduct({ ...product, fid: event.target.value })}
                    style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Food Name" 
                    value={product.fname} 
                    onChange={(event) => setProduct({ ...product, fname: event.target.value })}
                    style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <input 
                    type="number" 
                    name="price" 
                    placeholder="Price" 
                    value={product.price} 
                    onChange={(event) => setProduct({ ...product, price: event.target.value })}
                    style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <button onClick={addData} type="button" style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Add Food
                </button>
            </form>
            
            <button onClick={refreshForm} style={{ marginTop: '20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', padding: '5px', cursor: 'pointer' }}>
                Refresh
            </button>

            {msg && <p style={{ textAlign: 'center', color: 'green' }}>{msg}</p>}
        </div>
    );
}

export default AddFood;
