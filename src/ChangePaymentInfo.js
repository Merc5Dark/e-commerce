import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserData from './UserData'; // Import the user data
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import './ChangePaymentInfo.css';

const ChangePaymentInfo = () => {
  const user = UserData[0];
  const navigate = useNavigate(); // Create a navigate function

  // State for form fields
  const [paymentInfo, setPaymentInfo] = useState({
    type: user.paymentMethod.type,
    cardNumber: user.paymentMethod.cardNumber,
    expirationDate: user.paymentMethod.expirationDate,
    cvv: user.paymentMethod.cvv
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form...");
    const updatedUser = {
      ...user,
      paymentMethod: { ...paymentInfo }
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    navigate('/checkout'); // Redirect to the checkout page using the navigate function
  };

  return (
    <div className="payment-info-container">
      <div className="card-options">
        <h2>SELECT A CARD</h2>
        {/* Render card options */}
        <div className="card-option">
          <FontAwesomeIcon icon={faCreditCard} size="lg" />
          <span>Mastercard ending in 4752</span>
        </div>
        <div className="card-option">
          <FontAwesomeIcon icon={faCreditCard} size="lg" />
          <span>Visacard ending in 2584</span>
        </div>
      </div>
      <div className="container-payment">
        <div className="centered-border-payment">
          <h2> ADD A NEW CARD</h2>
          <form className="payment-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="type">Payment Type:</label>
              <input
                type="text"
                id="type"
                className="form-control"
                value={paymentInfo.type}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, type: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                className="form-control"
                value={paymentInfo.cardNumber}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expirationDate">Expiration Date:</label>
              <input
                type="text"
                id="expirationDate"
                className="form-control"
                value={paymentInfo.expirationDate}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, expirationDate: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                className="form-control"
                value={paymentInfo.cvv}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
              />
            </div>
            <p>
              <input type="checkbox" className='def-address' />
              Save this as your default payment method
            </p>
            <div className="form-group">
              <button type="submit" className="btn btn-primary save-changes-button">
                Add Payment Method
              </button>
            </div>
            <div className="back-btn-icon">
              <Link to="/checkout" className='back-btn-user'>
                Back
              </Link>
              <span className="icon-with-text" style={{ display: 'flex', alignItems: 'center', marginTop: '20px', color: '#02D693' }}>
                <FontAwesomeIcon icon={faLock} />
                <span>Secure Connection</span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePaymentInfo;