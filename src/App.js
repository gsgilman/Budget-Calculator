import React, { useState } from "react";
import BudgetCalculator from './Components/BudgetCalculator.jsx';
import FirebaseFetcher from './Components/FirebaseFetcher.jsx';

import "./App.css";

// Normally when building something like this I would be using packages to 
// make everything easy and pretty. However, for the sake of the exercise, I've built everything
// from scratch.

const App = () => {
  const [items, setItems] = useState([])
  return (

    <div className="App">
      <FirebaseFetcher setItems={setItems} />
      <BudgetCalculator items={items}/>
    </div>
  );
}

export default App;
