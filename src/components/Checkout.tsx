import { useContext, useState, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../ContextApi/CartContext";
import "../Checkout.css";

import {
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaMoneyBillWave,
  FaQrcode,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";
import QRCode from "react-qr-code";
import { getAddressFromLocation } from "../apis/locationapi";
import { sendOrderEmail } from "../services/EmailService";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const navigate = useNavigate();
  const location = useLocation();

  const {
    grandTotal = 0,
    discount = 0,
    finalAmount = 0,
    couponPercent = 0,
  } = location.state || {};

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState(""); // New state for email
  const [paymentMode, setPaymentMode] = useState("");

 const placeOrder = async () => {
    if (!name || !mobile || !address) {
      alert("Please fill all address details.");
      return;
    }
    if (!paymentMode) {
      alert("Please select a payment method.");
      return;
    }
    alert("Order Placed Successfully!");

    //prepare the email information 
    // Map the template params & our Data.
   
  const order = {
      order_id: Math.floor(Math.random() * 100000),
      name: name,
      email: email, // Recipient email
	  
      orders: cart.map((item) => ({
        name: item.name,
        units: item.quantity,
        price: item.price,
        image_url: item.imageUrl,
      })),

      cost: {
        shipping: 100,
        tax: 100,
        coupon: discount,
        total: finalAmount,
      },
    };
    
    await sendOrderEmail(order);

    clearCart();
    navigate("/cart");
  };

   const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      try {
        const data = await getAddressFromLocation(lat, lng);

        setAddress(data.display_name);
      } catch (error) {
        alert("Unable to fetch address.");
      }
    },
    (error) => {
      alert(error.message);
    }
  );
};


  return (
    <div className="checkout-page">

      <div className="checkout-header">

        <span className="checkout-tag">
          SECURE CHECKOUT
        </span>

        <h1>
          Complete Your Order
        </h1>

        <p>
          Enter your delivery details, choose your preferred
          payment method and confirm your order.
        </p>

      </div>

      <div className="checkout-layout">

        {/* ===========================
              LEFT SECTION
        =========================== */}

        <div className="checkout-left">

          {/* Delivery Address */}

          <section className="checkout-card">

            <div className="section-title">

              <FaMapMarkerAlt />

              <h2>
                Delivery Address
              </h2>

            </div>

            <div className="input-group">

              <label>
                Customer Name
              </label>

              <div className="input-box">

                <FaUser />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                />

              </div>

            </div>

            <div className="input-group">

              <label>
                Mobile Number
              </label>

              <div className="input-box">

                <FaPhone />

                <input
                  type="text"
                  placeholder="Enter mobile number"
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value)
                  }
                />

              </div>

            </div>


              <div className="input-box">

                <FaUser />

                <input
                  type="text"
                  placeholder="Enter your email id"
                  value={email}
                  onChange={(e) =>{
                    setEmail(e.target.value);
                    }}
                />

              </div>

            

            <button
    type="button"
    onClick={getCurrentLocation}
    className="location-btn"
  >
    <FaMapMarkerAlt />
    Use Current Location
  </button>

            <div className="input-group">

              <label>
                Delivery Address
              </label>

              <textarea
                rows={5}
                placeholder="Enter complete delivery address..."
                value={address}
                onChange={(e) =>
                  setAddress(e.target.value)
                }
              />

            </div>

          </section>

          {/* Payment Section */}

          <section className="checkout-card">

            <div className="section-title">

              <FaMoneyBillWave />

              <h2>
                Payment Method
              </h2>

            </div>

            <label className="payment-option">

              <input
                type="radio"
                value="UPI"
                checked={paymentMode === "UPI"}
                onChange={(e) =>
                  setPaymentMode(e.target.value)
                }
              />

              <div className="payment-content">

                <FaQrcode className="payment-icon upi" />

                <div>

                  <h3>
                    UPI Payment
                  </h3>

                  <p>
                    Google Pay, PhonePe, Paytm & more
                  </p>

                </div>

              </div>

            </label>

            <label className="payment-option">

              <input
                type="radio"
                value="COD"
                checked={paymentMode === "COD"}
                onChange={(e) =>
                  setPaymentMode(e.target.value)
                }
              />

              <div className="payment-content">

                <FaTruck className="payment-icon cod" />

                <div>

                  <h3>
                    Cash On Delivery
                  </h3>

                  <p>
                    Pay when your order arrives
                  </p>

                </div>

              </div>

            </label>

                        {/* Payment Details */}

            {paymentMode === "UPI" && (

              <div className="payment-info">

                {paymentMode === "UPI" && (
              <div className="qr-section">
                <h4>Scan UPI QR to Pay ₹{finalAmount.toFixed(2)}</h4>
                <QRCode
                  value={`upi://pay?pa=9182339021@ybl&pn=DeepakMart&am=${finalAmount.toFixed(2)}&cu=INR`}
                />
                <p>UPI ID: 9182339021@ybl</p>
              </div>
            )}
            <button
            onClick={() => {
              console.log("Place Order Clicked");

              placeOrder();
            }}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-lg font-bold"
>
  Place Order
</button>
            



                <h3>
                  Scan & Pay
                </h3>

                <p>
                  Use Google Pay, PhonePe, Paytm or any UPI
                  application to complete your payment.
                </p>

              </div>

            )}

            {paymentMode === "COD" && (

              <div className="payment-info cod-info">

                <FaTruck className="cod-large-icon" />

                <h3>
                  Cash On Delivery
                </h3>

                <p>
                  Your payment will be collected by the
                  delivery executive when your order reaches
                  your doorstep.
                </p>

              </div>

            )}

          </section>

        </div>

        {/* ===========================
              ORDER SUMMARY
        =========================== */}

        <aside className="summary-card">

          <h2>
            Order Summary
          </h2>

          <div className="summary-row">

            <span>
              Total Items
            </span>

            <strong>
              {cart.length}
            </strong>

          </div>

          <div className="summary-row">

            <span>
              Grand Total
            </span>

            <strong>
              ₹{grandTotal.toFixed(2)}
            </strong>

          </div>

          <div className="summary-row">

            <span>
              Coupon ({couponPercent}%)
            </span>

            <strong className="discount">

              -₹{discount.toFixed(2)}

            </strong>

          </div>

          <hr />

          <div className="summary-total">

            <span>
              Total Payable
            </span>

            <span>
              ₹{finalAmount.toFixed(2)}
            </span>

          </div>

          <button
            className="place-order-btn"
            onClick={placeOrder}
          >

            <FaCheckCircle />

            Place Order

          </button>

          <div className="secure-box">

            <FaCheckCircle />

            <p>

              Your order is protected with secure
              checkout and trusted payment methods.

            </p>

          </div>

        </aside>

      </div>

    </div>

  );

}

export default Checkout;