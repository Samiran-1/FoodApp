//import logo from './logo.svg';
import Nav from './components/Nav';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Food from './components/Food';
import AddFood from './components/AddFood';
import SearchFood from './components/SearchFood';
import UpdateFood from './components/UpdateFood';
import DeleteFood from './components/DeleteFood';
import FoodList from './components/FoodList';
import "bootstrap/dist/css/bootstrap.css";
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import NavClient from './components/NavClient';
import FoodListClient from './components/FoodListClient';
import SearchFoodClient from './components/SearchFoodClient';
import Billing from './components/Billing';
import AddOrder from './components/AddOrder';
function App() {
  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/flistclient" element={<FoodListClient/>}/>
        <Route path="/searchfoodclient" element={<SearchFoodClient/>}/>
        <Route path="/addorder" element={<AddOrder/>}/>
        <Route path="/billing" element={<Billing/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/nav" element={<Nav/>}/>
        <Route path="/navclient" element={<NavClient/>}/>
        <Route path="/food" element={<Food/>}>
        <Route path="addfood" element={<AddFood/>}/>
          <Route path="searchfood" element={<SearchFood/>}/>
          <Route path="updatefood" element={<UpdateFood/>}/>
          <Route path="deletefood" element={<DeleteFood/>}/>
          <Route path="foodlist" element={<FoodList/>}/>
        </Route>
                
     </Routes>
    </div>
  );
}

export default App;
