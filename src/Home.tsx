import { useNavigate } from "react-router-dom";
import "./Home.css";
import { PiCarrotBold } from "react-icons/pi";
import {  GiChickenOven } from "react-icons/gi";
import { LuMilk } from "react-icons/lu";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* Hero Section */}

      <div className="hero-section">

        <div className="hero-content">

          <span className="hero-tag">
            Fresh • Premium • Delivered
          </span>

          <h1 className="hero-title">
            Freshness You Can Trust,
            Delivered Every Day
          </h1>

          <p className="hero-description">
            Discover farm-fresh vegetables, premium meats and seafood,
            and high-quality dairy products sourced with care and
            delivered straight to your doorstep.
          </p>

          <button
            className="shop-btn"
            onClick={() => navigate("/veg-items")}
          >
            Explore Products
          </button>

        </div>

      </div>

      {/* Categories Section */}

      <div className="categories-section">

        <div
          className="category-card veg-card-home"
          onClick={() => navigate("/veg-items")}
        >
          <div className="category-icon">
            <PiCarrotBold/>
          </div>

          <h2>Farm Fresh Vegetables</h2>

          <p>
            Handpicked seasonal vegetables sourced directly
            from trusted farms.
          </p>
        </div>

        <div
          className="category-card nonveg-card-home"
          onClick={() => navigate("/non-veg-items")}
        >
          <div className="category-icon">
            <GiChickenOven/>
          </div>

          <h2>Premium Meat & Seafood</h2>

          <p>
            Fresh, hygienically processed meat and seafood
            of premium quality.
          </p>
        </div>

        <div
          className="category-card milk-card-home"
          onClick={() => navigate("/milk-items")}
        >
          <div className="category-icon">
            <LuMilk/>
          </div>

          <h2>Pure Dairy Essentials</h2>

          <p>
            Fresh milk, cheese, butter, and dairy products
            for your family.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;