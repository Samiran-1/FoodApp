import React from 'react';
import {useNavigate} from 'react-router-dom';
function Home() {
  var navigate=useNavigate();
  return (
    <div 
      className="relative w-full h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?food')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <h2 className="text-5xl font-extrabold mb-6 bg-black bg-opacity-60 p-5 rounded-lg shadow-lg relative z-10">FOOD APP</h2>
      
      <img 
        src='https://th.bing.com/th/id/OIP.3f4uw03GjHN2wa2tSeNc4wHaIu?rs=1&pid=ImgDetMain' 
        className='w-64 h-64 rounded-full shadow-2xl border-4 border-white bg-black bg-opacity-50 p-3 relative z-10' 
        alt='FOOD IMAGE'
      />
      
      <div className="mt-8 flex space-x-4 relative z-10">
        <button onClick={()=>{
          navigate("/register")
        }} style={{marginTop:"10px"}} className='btn btn-outline-warning'>REGISTER</button> &nbsp;&nbsp;
        <button onClick={()=>{
          navigate("/login")
        }}  style={{marginTop:"10px"}} className='btn btn-outline-warning'>LOGIN</button>
      </div>
    </div>
  );
}

export default Home;
