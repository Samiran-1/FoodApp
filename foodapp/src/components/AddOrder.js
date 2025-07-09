import React, { useState } from 'react';
import axios from 'axios';
import NavClient from './NavClient';
function AddOrder() {
    let [order, setOrder] = useState({
        fid: "",
        qty: "",
        uname: ""
    });
    let [msg, setMsg] = useState("");

    const addOrder = (e) => {
        //e.preventDefault(); // Prevent page refresh on submit

        axios.post("http://localhost:1004/order/add", order)
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
        setOrder({
            fid: "",
            qty: "",
            uname: ""
        });
        setMsg("");
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
            <NavClient/>
            <h2 style={{ textAlign: 'center' }}>Add Food Items</h2>
            <form  style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input 
                    type="text" 
                    name="fid" 
                    placeholder="Food Id" 
                    value={order.fid} 
                    onChange={(event) => setOrder({ ...order, fid: event.target.value })}
                    style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <input 
                    type="text" 
                    name="qty" 
                    placeholder="Quantity" 
                    value={order.qty} 
                    onChange={(event) => setOrder({ ...order, qty: event.target.value })}
                    style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <input 
                    type="text" 
                    name="uname" 
                    placeholder="User Name" 
                    value={order.uname} 
                    onChange={(event) => setOrder({ ...order, uname: event.target.value })}
                    style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <button onClick={addOrder} type="button" style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Order
                </button>
            </form>
            
            <button onClick={refreshForm} style={{ marginTop: '20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', padding: '5px', cursor: 'pointer' }}>
                Refresh
            </button>

            {msg && <p style={{ textAlign: 'center', color: 'green' }}>{msg}</p>}
        </div>
    );
}

export default AddOrder
