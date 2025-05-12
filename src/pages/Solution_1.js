import React from 'react';
import './Solution_1.css'; // Import the CSS file

import random from '../assets/Random Layout.png';
import optimized from '../assets/optimized layout.png';


function Solution_1() {
  return (
    <div className="solution-container">
      {/* Description Section */}
      <h1>Layout Optimization</h1>
      <p>
        This page demonstrates how to optimize the layout of products in a store 
        based on market basket analysis. The goal is to improve customer experience 
        and increase sales by placing related products together. Below, you can see 
        a random layout and an optimized layout based on the analysis.
      </p>

      {/* Random Layout Section */}
      <h2>Random Layout</h2>
      <div className="layout-box">
        <img src={random} />
      </div>

      {/* Optimized Layout Section */}
      <h2>Optimized Layout</h2>
      <div className="layout-box">
        <img src={optimized} />
      </div>
    </div>
  );
}

export default Solution_1;