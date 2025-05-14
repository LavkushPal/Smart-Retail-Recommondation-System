import React from 'react';
import './Home.css'; // Import CSS for styling

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Smart Retail</h1>
      <p>
        This project demonstrates how market basket analysis can be used to optimize retail operations and improve customer experience. 
        By analyzing customer purchase patterns, we can identify associations between products and use this information to make data-driven decisions.
      </p>

      <h2>What is Market Basket Analysis?</h2>
      <p>
        Market basket analysis is a data mining technique used to identify relationships between items purchased together. 
        It uses association rule mining to uncover patterns, such as "customers who buy bread are likely to buy butter." 
        These insights can help retailers optimize product placement, cross-sell products, and improve overall sales.
      </p>

      <h2>Association Rule Technique</h2>
      <p>
        The association rule technique involves identifying frequent itemsets and generating rules based on metrics like 
        <strong> support</strong>, <strong>confidence</strong>, and <strong>lift</strong>. For example:
      </p>
      <ul>
        <li><strong>Support:</strong> The proportion of transactions that include a specific item or itemset.</li>
        <li><strong>Confidence:</strong> The likelihood that a customer who buys one item will also buy another.</li>
        <li><strong>Lift:</strong> The strength of the association between two items compared to random chance.</li>
      </ul>

      <h2>Solutions Provided</h2>
      <h3>Solution 1: Layout Optimization</h3>
      <p>
        This solution focuses on optimizing the store layout by grouping related products together based on association rules. 
        For example, placing "bread" and "butter" near each other to encourage cross-selling. 
        The layout is divided into two parts:
      </p>
      <ul>
        <li><strong>Random Layout:</strong> A disorganized layout where products are placed randomly.</li>
        <li><strong>Optimized Layout:</strong> A layout where products are grouped based on their associations, improving customer convenience and sales.</li>
      </ul>

      <h3>Solution 2: Product Recommendations</h3>
      <p>
        This solution provides real-time product recommendations at the checkout counter. 
        When a customer purchases certain items, the system suggests additional products based on association rules. 
        For example, if a customer buys "liquor (appetizer)," the system might recommend "liver loaf" or "dessert."
      </p>

      <h2>Benefits for Retailers</h2>
      <p>
        By implementing these solutions, retailers can:
      </p>
      <ul>
        <li>Improve customer experience by making shopping more convenient.</li>
        <li>Increase sales through cross-selling and upselling opportunities.</li>
        <li>Optimize store layouts to maximize product visibility and accessibility.</li>
        <li>Leverage data-driven insights to make informed business decisions.</li>
      </ul>

      <p>
        Explore the solutions provided in this project to see how market basket analysis can transform retail operations!
      </p>
    </div>
  );
}

export default Home;