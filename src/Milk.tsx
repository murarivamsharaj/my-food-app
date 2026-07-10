import { LuMilk } from "react-icons/lu";
import "./Milk.css";
import { toast } from "react-toastify";
import type { Product } from "./interfaces/Product";
import { useContext } from "react";
import { CartContext } from "./ContextApi/CartContext";


function Milk() {

  let {addToCart} = useContext(CartContext);

  const milkItems: Product[] = [
    {
      id: 21,
      name: "Butter Milk",
      imageUrl: "images/Milk/d1.jpg",
      price: 30,
      description: "Refreshing and healthy butter milk."
    },
    {
      id: 22,
      name: "Butter",
      imageUrl: "images/Milk/d2.jpg",
      price: 60,
      description: "Creamy and delicious fresh butter."
    },
    {
      id: 23,
      name: "Cheese",
      imageUrl: "images/Milk/d3.jpg",
      price: 120,
      description: "Premium quality cheese for every meal."
    },
    {
      id: 24,
      name: "Cream",
      imageUrl: "images/Milk/d4.jpg",
      price: 70,
      description: "Fresh dairy cream with rich texture."
    },
    {
      id: 25,
      name: "Curd",
      imageUrl: "images/Milk/d5.jpg",
      price: 40,
      description: "Healthy and probiotic rich curd."
    },
    {
      id: 26,
      name: "Ghee",
      imageUrl: "images/Milk/d6.jpg",
      price: 250,
      description: "Pure and aromatic cow ghee."
    },
    {
      id: 27,
      name: "Ice Cream",
      imageUrl: "images/Milk/d7.jpg",
      price: 90,
      description: "Delicious frozen dairy dessert."
    },
    {
      id: 28,
      name: "Milk",
      imageUrl: "images/Milk/d8.jpg",
      price: 32,
      description: "Fresh and nutritious milk."
    },
    {
      id: 29,
      name: "Paneer",
      imageUrl: "images/Milk/d9.jpg",
      price: 95,
      description: "Soft and fresh paneer cubes."
    },
    {
      id: 30,
      name: "Yogurt",
      imageUrl: "images/Milk/d10.jpg",
      price: 45,
      description: "Healthy and creamy yogurt."
    }
  ];

  return (
    <div className="milk-page">
      <h1 className="milk-heading"><LuMilk className="milk-heading-icon"/>Premium Dairy Collection</h1>

      <ul className="milk-container">
        {milkItems.map((milkItem) => (
          <li key={milkItem.id} className="milk-card">
            <img
              src={milkItem.imageUrl}
              alt={milkItem.name}
              className="milk-image"
            />

            <h3 className="milk-name">{milkItem.name}</h3>

            <p className="milk-description">
              {milkItem.description}
            </p>

            <div className="milk-footer">
              <span className="milk-price">
                ₹{milkItem.price}
              </span>

              <button className="buy-btn" onClick={() => {
                addToCart(milkItem);
                toast.success(`${milkItem.name} added to cart successfully!`)}
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

export default Milk;