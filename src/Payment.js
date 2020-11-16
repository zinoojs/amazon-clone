import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setProcessing(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });
        history.replace("/orders");
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  useEffect(() => {
    const getClientSecret = async () => {
      const responce = await axios({
        method: "POST",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(responce.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log("the secret is >>>", clientSecret);
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} Items</Link>)
        </h1>
        {/* payment Section - delivert address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>23St, Yangon</p>
            <p>Myanmar Air Port</p>
          </div>
        </div>
        {/* payment Section - delivert item */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items And Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* payment Section - Payment Method */}
        <div className="payment__section">
          <h3>Payment Method</h3>
          <div className="payment__details">
            {/* stripe method will go here */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="price__paymentContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Order ({basket?.length} items): <strong>{value}</strong>
                      </p>
                      {/* <small className="subtotal__gift">
                        <input type="checkbox" />
                        This order contain a gift
                      </small> */}
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
