import { useContext, useRef, useState } from "react";
import "../Cart.css";
import { CartContext } from "../ContextApi/CartContext";
import { coupons } from "../data/Cupons";

import {
  FaShoppingCart,
  FaTrash,
  FaPlus,
  FaMinus,
  FaTag,
  FaMoneyBillWave,
  FaCheckCircle,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const couponRef = useRef<HTMLInputElement>(null);

  const [couponPercent, setCouponPercent] = useState(0);
  const [message, setMessage] = useState("");

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const applyCoupon = () => {
    const code = couponRef.current?.value.trim() || "";

    const coupon = coupons.find(
      (item) => item.code.toUpperCase() === code.toUpperCase()
    );

    if (coupon) {
      setCouponPercent(coupon.discount);
      setMessage(`Coupon Applied (${coupon.discount}% OFF)`);
    } else {
      setCouponPercent(0);
      setMessage("Invalid Coupon Code");
    }
  };

  const discount = (grandTotal * couponPercent) / 100;
  const finalAmount = grandTotal - discount;

  let navigate = useNavigate();

  return (
    <div className="cart-page">

      <div className="cart-header">
        <FaShoppingCart />
        <h1>My Shopping Cart</h1>
      </div>

      {cart.length === 0 ? (

        <div className="empty-cart">
          <FaShoppingCart className="empty-icon" />
          <h2>Your Cart is Empty</h2>
          <p>Add some products to continue shopping.</p>
        </div>

      ) : (

        <div className="cart-container">

          {/* Left */}

          <div className="cart-items">

            {cart.map((item) => (

              <div className="cart-card" key={item.id}>

                <div className="image-box">
                  <img
                    src={item.imageUrl}
                    alt={item.description}
                  />
                </div>

                <div className="item-details">

                  <h2>{item.name}</h2>

                  <p className="price">
                    ₹{item.price}
                  </p>

                  <p className="subtotal">
                    Total :
                    <span>
                      ₹{item.price * item.quantity}
                    </span>
                  </p>

                </div>

                <div className="item-actions">

                  <div className="quantity-box">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      <FaMinus />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      <FaPlus />
                    </button>

                  </div>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    <FaTrash />
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* Right */}

          <div className="summary-card">

            <h2>
              Order Summary
            </h2>

            <div className="coupon-box">

              <div className="coupon-title">
                <FaTag />
                <span>Coupon</span>
              </div>

              <div className="coupon-input">

                <input
                  ref={couponRef}
                  placeholder="Enter Coupon"
                />

                <button
                  onClick={applyCoupon}
                >
                  Apply
                </button>

              </div>

              {message && (
                <p
                  className={
                    couponPercent > 0
                      ? "success-msg"
                      : "error-msg"
                  }
                >
                  {message}
                </p>
              )}

            </div>

            <div className="summary-row">

              <span>
                <FaMoneyBillWave />
                Grand Total
              </span>

              <strong>
                ₹{grandTotal.toFixed(2)}
              </strong>

            </div>

            <div className="summary-row">

              <span>
                <FaTag />
                Discount
              </span>

              <strong className="discount">
                -₹{discount.toFixed(2)}
              </strong>

            </div>

            <div className="summary-row">

              <span>
                <FaTruck />
                Delivery
              </span>

              <strong className="free">
                FREE
              </strong>

            </div>

            <div className="summary-total">

              <span>
                <FaCheckCircle />
                Payable
              </span>

              <h3>
                ₹{finalAmount.toFixed(2)}
              </h3>

            </div>

            <div className="secure-box">

              <p>
                <FaShieldAlt />
                100% Secure Payments
              </p>

              <p>
                <FaTruck />
                Fast Delivery
              </p>

            </div>

            <button onClick={() => 
              navigate("/checkout",{
                state:{
                grandTotal,
                discount,
                finalAmount,
                couponPercent,
                }
              })
            }
            className="checkout-btn">
              Proceed to Checkout
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;