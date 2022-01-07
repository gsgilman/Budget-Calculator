import React, { useState } from "react";
import BudgetCalculator from './Components/BudgetCalculator.jsx';
import FirebaseFetcher from './Components/FirebaseFetcher.jsx';
import "./App.css";


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
