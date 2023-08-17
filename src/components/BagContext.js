import React, { createContext, useContext, useState } from 'react';

// Create a context for bag-related state and functions
const BagContext = createContext();

// BagProvider component wraps the app and provides bag-related functionality
export const BagProvider = ({ children }) => {
  // State to manage bag items and total
  const [bagItems, setBagItems] = useState([]);
  const [total, setTotal] = useState(0);

  // Function to add a product to the bag
  const addToBag = (product) => {
    setBagItems([...bagItems, { ...product, quantity: 1 }]); // Set initial quantity to 1
    setTotal(total + product.price); // Update the total
  };

  // Function to remove a product from the bag
  const removeFromBag = (product) => {
    const updatedBagItems = bagItems.filter(item => item !== product);
    setBagItems(updatedBagItems);
    setTotal(total - product.price * product.quantity);
  };

  // Function to update the quantity of a product in the bag
  const updateQuantity = (product, newQuantity) => {
    const updatedBagItems = bagItems.map(item =>
      item === product ? { ...item, quantity: newQuantity } : item
    );

    // Calculate the updated total based on the new quantities
    const updatedTotal = updatedBagItems.reduce((sum, item) =>
      sum + item.price * item.quantity, 0);

    setBagItems(updatedBagItems);
    setTotal(updatedTotal);
  };

  // Provide bag-related state and functions to the components
  return (
    <BagContext.Provider value={{ bagItems, addToBag, removeFromBag, updateQuantity, total }}>
      {children}
    </BagContext.Provider>
  );
};

// Custom hook to easily access bag-related state and functions
export const useBag = () => {
  return useContext(BagContext);
};

