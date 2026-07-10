
import "./VegItems.css";
import { PiCarrotBold } from "react-icons/pi";
import { toast } from "react-toastify";
import type { Product } from "./interfaces/Product";
import { useContext } from "react";
import { CartContext } from "./ContextApi/CartContext";


function VegItems() {

  let {addToCart} = useContext(CartContext);

  const vegItems: Product[] = [
    {
      id: 1,
      name: "Brinjal",
      imageUrl: "images/Veg/d21.jpg",
      price: 30,
      description: "Fresh and healthy brinjals directly from farms."
    },
    {
      id: 2,
      name: "Cabbage",
      imageUrl: "images/Veg/d22.jpg",
      price: 35,
      description: "Crispy and fresh cabbage rich in nutrients."
    },
    {
      id: 3,
      name: "Capsicum",
      imageUrl: "images/Veg/d23.jpg",
      price: 50,
      description: "Premium quality capsicum with rich flavor."
    },
    {
      id: 4,
      name: "Carrot",
      imageUrl: "images/Veg/d24.jpg",
      price: 40,
      description: "Sweet and juicy carrots full of vitamins."
    },
    {
      id: 5,
      name: "Cauliflower",
      imageUrl: "images/Veg/d25.jpg",
      price: 45,
      description: "Farm fresh cauliflower for healthy meals."
    },
    {
      id: 6,
      name: "Cucumber",
      imageUrl: "images/Veg/d26.jpg",
      price: 30,
      description: "Fresh cucumbers perfect for salads and snacks."
    },
    {
      id: 7,
      name: "Onion",
      imageUrl: "images/Veg/d27.jpg",
      price: 32,
      description: "Premium onions with rich taste and freshness."
    },
    {
      id: 8,
      name: "Potato",
      imageUrl: "images/Veg/d28.jpg",
      price: 28,
      description: "Fresh potatoes suitable for all dishes."
    },
    {
      id: 9,
      name: "Spinach",
      imageUrl: "images/Veg/d29.jpg",
      price: 25,
      description: "Nutritious spinach packed with iron and minerals."
    },
    {
      id: 10,
      name: "Tomato",
      imageUrl: "images/Veg/d30.jpg",
      price: 38,
      description: "Fresh red tomatoes with natural sweetness."
    }
  ];

  return (
    <div className="veg-page">
      <h1 className="veg-heading"><PiCarrotBold className="veg-heading-icon"/> Fresh Vegetables</h1>

      <ul className="veg-container">
        {vegItems.map((veg) => (
          <li key={veg.id} className="veg-card">
            <img
              src={veg.imageUrl}
              alt={veg.name}
              className="veg-image"
            />

            <h3 className="veg-name">{veg.name}</h3>

            <p className="veg-description">
              {veg.description}
            </p>

            <div className="veg-footer">
              <span className="veg-price">
                ₹{veg.price}/kg
              </span>

              <button className="buy-btn" onClick={() => {
                addToCart(veg);
                toast.success(`${veg.name} added to cart successfully!`)}
            }>
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VegItems;