import React, { useState } from 'react';
import { useBag } from './BagContext';
import { Link, useLocation } from 'react-router-dom';
import './Bag.css';
import SideBar from './SideBar';
import BagPage from './BagPage';

const Bag = () => {
  // Get bag items and related functions from context
  const { bagItems, removeFromBag, updateQuantity } = useBag();
  const location = useLocation();

  // Check if the page is the checkout page
  const isCheckoutPage = location.pathname === '/Checkout';

  // Handle quantity change for an item
  const handleQuantityChange = (itemId, newQuantity) => {
    // Update quantity directly within the bagItems array
    const updatedBagItems = bagItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    updateQuantity(updatedBagItems); // Update context with new bag items
  };

  return (
    <div className="bag-container">
      {/* Back button to navigate back to the main page */}
      <Link to="/" className="back-link">
        <button className="back-button">Back</button>
      </Link>
      {/* Show sidebar if not on checkout page */}
      {!isCheckoutPage && <SideBar />}
      {/* Show bag page content if not on checkout page */}
      {!isCheckoutPage && <BagPage />}
      <ul className="bag-list">
        <h1 className="check-your-bag-heading">Check Your Bag Items</h1>
        {/* Map through bag items and render each item */}
        {bagItems.map(item => (
          <li key={item.id} className="bag-item">
            <div className="bag-item-content">
              <img src={item.imageUrl} alt={item.title} className="bag-item-img" />
              <div className="bag-item-details">
                <h2 className="item-title">{item.title}</h2>
                <p className="item-description">{item.description}</p>
                <p className="item-paragraph">Rating: {item.rating}</p>
                <p className="item-paragraph">Price: {item.currency} {item.price.toFixed(2)}</p>
                {/* Quantity input */}
                <label className="quantity-label">Quantity: </label>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
                />
                {/* Remove button */}
                <button onClick={() => removeFromBag(item)} className="remove-button">Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bag;