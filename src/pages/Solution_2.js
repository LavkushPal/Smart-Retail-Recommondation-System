import React, { useState } from 'react';
import './Solution_2.css'; // Import the CSS file

function Solution_2() {
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [suggestionsByProduct, setSuggestionsByProduct] = useState({});

  // Hardcoded association rules
  const associationRules = {
    'liquor (appetizer)': ['liver loaf', 'dessert'],
    'liver loaf': ['liquor (appetizer)'],
    dessert: ['liquor (appetizer)'],
    'kitchen towels': ['sliced cheese'],
    'sliced cheese': ['kitchen towels'],
    fish: ['tropical fruit'],
    'tropical fruit': ['fish'],
    'snack products': ['rolls/buns'],
    'rolls/buns': ['snack products'],
    whisky: ['specialty chocolate', 'dishes', 'yogurt', 'napkins', 'detergent', 'pastry'],
    'specialty chocolate': ['whisky'],
    dishes: ['whisky'],
    yogurt: ['whisky', 'cream'],
    napkins: ['whisky'],
    detergent: ['whisky'],
    pastry: ['whisky', 'hair spray'],
    cream: ['yogurt'],
    'hair spray': ['butter', 'pastry'],
    butter: ['hair spray'],
    'nut snack': ['canned beer'],
    'canned beer': ['nut snack'],
    'frozen dessert': ['cream cheese'],
    'cream cheese': ['frozen dessert', 'tidbits'],
    'organic sausage': ['frozen meals', 'sugar'],
    'frozen meals': ['organic sausage'],
    sugar: ['organic sausage'],
    tidbits: ['cream cheese'],
  };

  // Handle input change
  const handleInputChange = (e) => {
    const items = e.target.value.split(',').map((item) => item.trim().toLowerCase());
    setPurchasedItems(items);
  };

  // Generate suggestions grouped by purchased product
  const generateSuggestions = () => {
    const suggestions = {};
    purchasedItems.forEach((item) => {
      if (associationRules[item]) {
        suggestions[item] = associationRules[item];
      }
    });
    setSuggestionsByProduct(suggestions);
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
          placeholder="e.g., liquor (appetizer), fish"
          onChange={handleInputChange}
        />
        <button onClick={generateSuggestions}>Generate Suggestions</button>
      </div>

      {/* Purchased Items and Suggestions Section */}
      <div className="purchased-suggestions-section">
        {Object.keys(suggestionsByProduct).length > 0 ? (
          Object.entries(suggestionsByProduct).map(([purchasedItem, suggestions], index) => (
            <div key={index} className="purchased-item-group">
              <h2>{purchasedItem}</h2>
              <ul>
                {suggestions.map((suggestedItem, idx) => (
                  <li key={idx}>{suggestedItem}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No suggestions available. Please enter purchased items.</p>
        )}
      </div>
    </div>
  );
}

export default Solution_2;