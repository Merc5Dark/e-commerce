import React from 'react';
import './successstyle.css';

function App() {
  return (
    <main>
      <section className="mast">
        <figure className="mast__bg" style={{ backgroundImage: "url(https://shorturl.at/lxCG7)" }}></figure>
        <header className="mast__header">
          <h1 className="mast__title js-spanize">Thank you for purchasing, be sure to visit soon with friends and family</h1>
          <hr className="sep" />
          <p className="mast__text js-spanize">
            Your order was placed successfully <br />
            Your order will be delivered in 3-4 working days
          </p>
        </header>
      </section>
    </main>
  );
}

export default App;