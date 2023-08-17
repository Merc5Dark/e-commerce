import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Checkout.css';
import Bag from './Bag';
import OrderSummary from '../components/OrderSummary';
import { useBag } from '../components/BagContext';
import UserData from '../UserData';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem('user')) || UserData[0];

  const paymentMethod = location.state?.paymentMethod || storedUser.paymentMethod;
  const { total: bagTotal } = useBag();

  const handleChangeUserInfo = () => {
    navigate('/ChangeUserInfo');
  };

  return (
    <div className="checkout-container">
      <div className="user-info">
        <h3>S H I P P I N G   A D D R E S S </h3>
        {Object.entries(storedUser.shippingAddress).map(([field, value]) => (
          <p key={field}>{value}</p>
        ))}
        <button className="change-buttons change" onClick={handleChangeUserInfo}>
          Change
        </button>
      </div>
      <div className="payment-info">
        <h3>P A Y M E N T  M E T H O D </h3>
        <p>Type: {paymentMethod.type}</p>
        <p>Card Number: {paymentMethod.cardNumber}</p>
        <p>Expiration Date: {paymentMethod.expirationDate}</p>
        <p>CVV: {paymentMethod.cvv}</p>
        <Link to="/ChangePaymentInfo" className="change-buttons change">
          Change
        </Link>
        <h6>Gift Card</h6>
        <p>Amount: {storedUser.giftCard}</p>
        <p>
          <input type="checkbox" />
          Billing Address same as Shipping Address
        </p>
      </div>
      <OrderSummary total={bagTotal} />
      <Bag />
    </div>
  );
};

export default Checkout;