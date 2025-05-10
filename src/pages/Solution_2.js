import React, { useState } from 'react';
import './Solution_2.css'; // Import the CSS file

function Solution_2() {
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  // Mock association rules (replace with real data)
  const associationRules = {
    milk: ['bread', 'butter'],
    bread: ['milk', 'jam'],
    soda: ['chips', 'cookies'],
    eggs: ['cheese', 'bacon'],
  };

  // Handle input change
  const handleInputChange = (e) => {
    const items = e.target.value.split(',').map((item) => item.trim().toLowerCase());
    setPurchasedItems(items);
  };

  // Generate suggestions based on association rules
  const generateSuggestions = () => {
    const suggestions = new Set();
    purchasedItems.forEach((item) => {
      if (associationRules[item]) {
        associationRules[item].forEach((suggestedItem) => suggestions.add(suggestedItem));
      }
    });
    setSuggestedProducts([...suggestions]);
  };

  return (
    <div className="solution-2-container">
      <h1>Product Recommendations</h1>
      <p>
        Enter the products purchased by the customer, and we will suggest additional products based on association rules.
      </p>

      {/* Input Section */}
      <div className="input-section">
        <label htmlFor="purchased-items">Purchased Items:</label>
        <input
          type="text"
          id="purchased-items"
          placeholder="e.g., milk, bread, soda"
          onChange={handleInputChange}
        />
        <button onClick={generateSuggestions}>Generate Suggestions</button>
      </div>

      {/* Suggestions Section */}
      <div className="suggestions-section">
        <h2>Suggested Products</h2>
        {suggestedProducts.length > 0 ? (
          <ul>
            {suggestedProducts.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        ) : (
          <p>No suggestions available. Please enter purchased items.</p>
        )}
      </div>
    </div>
  );
}

export default Solution_2;