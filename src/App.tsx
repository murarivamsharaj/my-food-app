import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import VegItems from "./VegItems";
import NonVeg from "./NonVeg";
import Milk from "./Milk";
import { LuHouse, LuMilk } from "react-icons/lu";
import { PiCarrotBold } from "react-icons/pi";
import { GiChickenOven } from "react-icons/gi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { useContext } from "react";
import { CartContext } from "./ContextApi/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { HiOutlineUser } from "react-icons/hi";


function App() {

  const { cart } = useContext<any>(CartContext);

  return (
    <BrowserRouter>
      <div className="app-container">

        <nav className="navbar">
          <NavLink className="nav-link" to="/"><LuHouse size={30}/>Home</NavLink>
          <NavLink className="nav-link" to="/veg-items"><PiCarrotBold size={30}/>Veg Items</NavLink>
          <NavLink className="nav-link" to="/non-veg-items"><GiChickenOven size={30}/>Non Veg Items</NavLink>
          <NavLink className="nav-link" to="/milk-items"><LuMilk size={30}/>Milk Items</NavLink>
          <NavLink className="nav-link" to="/register"><HiOutlineUser size={30}/>Register</NavLink>
          <NavLink className="nav-link" to="/cart">Cart {cart.length} </NavLink>



        </nav>

        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/veg-items" element={<VegItems />} />
            <Route path="/non-veg-items" element={<NonVeg />} />
            <Route path="/milk-items" element={<Milk />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />


          </Routes>
        </div>

        <ToastContainer
            position="top-right"
            autoClose={2500}
            toastStyle={{
                borderRadius: "16px",
                fontSize: "15px"
            }}
        />

      </div>
    </BrowserRouter>
  );
}

export default App;