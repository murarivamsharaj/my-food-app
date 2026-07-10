import { GiChickenOven } from "react-icons/gi";
import "./NonVeg.css";
import { toast } from "react-toastify";
import type { Product } from "./interfaces/Product";
import { useContext } from "react";
import { CartContext } from "./ContextApi/CartContext";


function NonVeg() {

  let {addToCart} = useContext(CartContext);

  const nonVegItems: Product[] = [
    { id: 11, name: "Chicken", imageUrl: "images/NonVeg/d11.jpg", price: 280, description: "Fresh farm chicken" },
    { id: 12, name: "Eggs", imageUrl: "images/NonVeg/d12.jpg", price: 90, description: "Fresh farm eggs" },
    { id: 13, name: "Duck", imageUrl: "images/NonVeg/d13.jpg", price: 380, description: "Fresh country duck" },
    
    { id: 14, name: "Fish", imageUrl: "images/NonVeg/d14.jpg", price: 320, description: "Fresh river fish" },
    { id: 15, name: "Mutton", imageUrl: "images/NonVeg/d15.jpg", price: 780, description: "Premium fresh mutton" },
    { id: 16, name: "Prawns", imageUrl: "images/NonVeg/d16.jpg", price: 620, description: "Fresh jumbo prawns" },
    { id: 17, name: "Crab", imageUrl: "images/NonVeg/d17.jpg", price: 450, description: "Fresh sea crab" },
    { id: 18, name: "Sardines", imageUrl: "images/NonVeg/d18.jpg", price: 260, description: "Fresh sardines" },
    { id: 19, name: "Squid", imageUrl: "images/NonVeg/d19.jpg", price: 540, description: "Fresh squid" },
    { id: 20, name: "Turkey", imageUrl: "images/NonVeg/d20.jpg", price: 420, description: "Fresh turkey meat" },
  ];

  return (
    <div className="nonveg-page">
      <h1 className="nonveg-heading"><GiChickenOven className="nonveg-heading-icon"/>Premium Non-Veg Collection</h1>

      <ul className="nonveg-container">
        {nonVegItems.map((item) => (
          <li key={item.id} className="nonveg-card">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="nonveg-image"
            />

            <h3 className="nonveg-name">{item.name}</h3>

            <p className="nonveg-description">
              {item.description}
            </p>

            <div className="nonveg-footer">
              <span className="nonveg-price">
                ₹{item.price}/kg
              </span>

              <button className="nonveg-btn" onClick={() => {
                addToCart(item);
                toast.success(`${item.name} added to cart successfully!`)}
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

export default NonVeg;
