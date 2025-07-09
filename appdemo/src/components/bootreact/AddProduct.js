import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function AddProduct() {
    let[product,setProduct]=useState({
        pid:"",
        pname:"",
        pqty:"",
        price:""
    })
    let[msg,setMsg]=useState("")
    const addData=()=>{
        axios.post("http://localhost:1004/product/add",product)
        .then((res)=>{
            console.log(res.data);
            setMsg(res.data);
        })
        .catch((error)=>{
            console.log(error);
            console.log("SOMETHING WENT WRONG ADD DATA");
        })
}
const refreshForm = () => {
    setProduct({
        pid: "",
        pname: "",
        pqty: "",
        price: ""
    });
    setMsg("");  
};
  return (
    <div style={{width:"30%",margin:"50px auto"}}>
        <h2 className='text-primary'>ADDING PRODUCT</h2>
      <input className='form-control' type='text' placeholder='ENTER THE PRODUCT ID' 
      value={product.pid}
      onChange={(event)=>{
        setProduct({
            ...product,
            pid:event.target.value
        })
      }}/>
      <input className='form-control' type='text' placeholder='ENTER THE PRODUCT NAME' 
      value={product.pname}
      onChange={(event)=>{
        setProduct({
            ...product,
            pname:event.target.value
        })
      }}/>
      <input className='form-control' type='text' placeholder='ENTER THE PRODUCT QUANTITY' 
      value={product.pqty}
      onChange={(event)=>{
        setProduct({
            ...product,
            pqty:event.target.value
        })
      }}/>
      <input className='form-control' type='text' placeholder='ENTER THE PRODUCT PRICE' 
      value={product.price}
      onChange={(event)=>{
        setProduct({
            ...product,
            price:event.target.value
        })
      }}/>
      <button className='btn btn-outline-primary' onClick={addData}>ADD</button>
      <button className='btn btn-outline-primary' onClick={refreshForm}>REFRESH</button>
      <h3 className='text-warning'>{msg}</h3>
    </div>
  )
}

export default AddProduct
