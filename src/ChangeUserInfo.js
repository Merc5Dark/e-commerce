import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserData from './UserData'; // Import the user data
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import './ChangeUserInfo.css';

const ChangeUserInfo = () => {
  const user = UserData[0];
  const navigate = useNavigate(); // Create a navigate function

  // Initialize state for form fields using user data
  const initialFormState = {
    name: user.name,
    shippingAddress: { ...user.shippingAddress }
  };
  const [formFields, setFormFields] = useState(initialFormState);

  const handleInputChange = (field, value) => {
    setFormFields({
      ...formFields,
      [field]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form...");
    const updatedUser = {
      ...user,
      name: formFields.name,
      shippingAddress: { ...formFields.shippingAddress }
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    navigate('/checkout'); // Redirect to the checkout page using navigate function
  };

  return (
    <div className="form-container">
      <div className="centered-border-user">
        <form className="user-form" onSubmit={handleSubmit}>
          {/* Loop through form fields */}
          {Object.entries(formFields.shippingAddress).map(([field, value]) => (
            <div className="form-group" key={field}>
              <label htmlFor={field}>{field === 'zip' ? 'Zip' : field}:</label>
              <input
                type="text"
                id={field}
                className="form-control"
                value={value}
                onChange={(e) => handleInputChange(field, e.target.value)}
              />
            </div>
          ))}
          <p>
            <input type="checkbox" className='def-address' />
            Save this as your default address
          </p>
          <div className="form-group">
            <button type="submit" className="btn btn-primary save-changes-button">
              Add Address
            </button>
            <div className="back-btn-icon">
              <Link to="/checkout" className='back-btn-user'>
                Back
              </Link>
              <span className="icon-with-text" style={{ display: 'flex', alignItems: 'center', marginTop: '20px', color: '#02D693' }}>
                <FontAwesomeIcon icon={faLock} />
                <span>Secure Connection</span>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeUserInfo;