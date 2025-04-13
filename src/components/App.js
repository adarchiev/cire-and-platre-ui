import React from 'react';
import './App.css';
// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
// Import the candle image
import candleImage from '../assets/candle.webp'; // Ensure you have a candle image in this path

function App() {
  const candles = [
    { id: 1, name: 'Lavender Bliss', price: 15.99 },
    { id: 2, name: 'Citrus Zest', price: 12.99 },
    { id: 3, name: 'Vanilla Dream', price: 14.99 },
    { id: 4, name: 'Ocean Breeze', price: 16.99 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/* Add the candle image */}
        <img src={candleImage} alt="Candle" className="candle-image" />
        <h1>Handmade Candles</h1>
        <p>Explore our collection of beautifully crafted candles.</p>
      </header>
      <main>
        <ul className="candle-list">
          {candles.map(candle => (
            <li key={candle.id} className="candle-item">
              <FontAwesomeIcon icon={faFire} className="candle-icon" />
              <h2>{candle.name}</h2>
              <p>Price: ${candle.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer className="App-footer">
        <p>&copy; 2025 Handmade Candles. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;