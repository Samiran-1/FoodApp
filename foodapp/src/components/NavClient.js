import React from 'react'
import "./NavClient.css"
function NavClient() {
  return (
    <div className='naContainer'>
      <div className='ltContainer'>
        <h2>Food APP Client</h2>
      </div>
      <div className='rtContainer'>
        <a href='/flistclient'>FOODLIST</a>
        <a href='/searchfoodclient'>SEARCH FOOD</a>
        <a href='/addorder'>ADD ORDER</a>
        <a href='/billing'>BILLING</a>

      </div>
    </div>
  )
}

export default NavClient
