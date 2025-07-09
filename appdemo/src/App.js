//import logo from './logo.svg';
// import FunctionalComp from './components/FunctionalComp';
import Electronics from './components/router/Electronics';
import Retails from './components/router/Retails';
import Garment from './components/router/Garment';
import Jewellery from './components/router/Jewellery';
import Product from './components/router/Product';
import ProductReport from './components/bootreact/ProductReport';
import AddProduct from './components/bootreact/AddProduct';
import DeleteProduct from './components/bootreact/DeleteProduct';
// import FunctionalComponent from './components/FunctionalComponent';
import StateDemo from './components/state/StateDemo';
import Profile from './components/state/Profile';
import Parent from './components/props/Parent';
import A from './components/propsdriling/A';
import Parent1 from './components/contextapi/Parent1';
import Main from "./components/conditionalrendering/Main";
import User from "./components/axios/User";
import Userinfo from "./components/useeffect/Userinfo";
import Nav from "./components/router/Nav";
import { Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>REACT APP</h2>
    <Nav/>
    <Routes>
        <Route path="/state" element={<StateDemo/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/props" element={<Parent/>}/>
        <Route path="/propsdrilling" element={<A/>}/>
        <Route path="/context" element={<Parent1/>}/>
        <Route path="axios" element={<User/>}/>
        <Route path="useeffect" element={<Userinfo/>}/>
        <Route path="condrend" element={<Main/>}/>
        <Route path="preport" element={<ProductReport/>}/>
        <Route path="addproduct" element={<AddProduct/>}/>
        <Route path="deleteproduct" element={<DeleteProduct/>}/>
        <Route path="product" element={<Product/>}>
          <Route path="electronics" element={<Electronics/>}/>
          <Route path="retails" element={<Retails/>}/>
          <Route path="garment" element={<Garment/>}/>
          <Route path="jewellery" element={<Jewellery/>}/>
        </Route>
     </Routes>
    </div>
  );
}

export default App;
