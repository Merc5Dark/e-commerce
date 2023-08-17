import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'; // Import Provider
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import your homepage component
import ProductDetails from './pages/ProductDetails';
import Bag from './pages/Bag'; // Import your Bag component
import { BagProvider } from './components/BagContext'; // Import your BagProvider
import Checkout from './pages/Checkout';
import ChangeUserInfo from './pages/ChangeUserInfo';
import ChangePaymentInfo from './pages/ChangePaymentInfo';
import OrderSuccess from './pages/OrderSuccess';

function App() {
  return (
    <BagProvider>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/Bag" element={<Bag/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route path="/ChangeUserInfo" element={<ChangeUserInfo/>}/>
        <Route path="/ChangePaymentInfo" element={<ChangePaymentInfo/>}/>
        <Route path="/OrderSuccess" element={<OrderSuccess/>}/>
        </Routes>
      </Router>
    </BagProvider>
  );
}

export default App;
