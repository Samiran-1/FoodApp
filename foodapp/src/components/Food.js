import React from 'react'
import "./Food.css"
import { Link, Outlet } from 'react-router-dom'
function Food() {
    return (
        <div className='fContainer'>
          <div className='lContainer'>
            <Link to="addfood">ADD-FOOD</Link>
            <Link to="searchfood">SEARCH-FOOD</Link>        
            <Link to="updatefood">UPDATE-FOOD</Link>        
            <Link to="deletefood">DELETE-FOOD</Link>
            <Link to="foodlist">FOOD-LIST</Link>                
          </div>
          <div className='rContainer'>
           <Outlet/>
          </div>
        </div>
      )
}

export default Food
