import React from 'react';
import { Link } from 'react-router-dom';
import { useBag } from './BagContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './BagSideBar.css';

const BagSideBar = () => {
  const { bagItems } = useBag();

  // Function to render individual bag item images
  const renderBagItemImages = () => {
    return bagItems.map((item, index) => (
      <img key={index} src={item.imageUrl} alt={item.title} className="bag-item-image" />
    ));
  };

  return (
    <div className="bagsidebar">
      <h3>Bag</h3>
      {/* Display bag item images */}
      <div className="bag-images">
        {renderBagItemImages()}
      </div>
      {/* Link to the bag page */}
      <Link to="/Bag" className="view-bag-link">
        <button className="view-bag-button">
          <FontAwesomeIcon icon={faShoppingBag} /> View Bag
        </button>
      </Link>
    </div>
  );
};

export default BagSideBar;