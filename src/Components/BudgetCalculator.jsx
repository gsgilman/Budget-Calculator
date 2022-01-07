import React, { useState } from "react";
import "./BudgetCalculator.css"

const isNumberRegex = /(^\d+$)|(^$)/;   
const BudgetCalculator = (props) => {
    const [budget, setBudget] = useState(null);

    const budgetOnChange = (e) => {
        if (isNumberRegex.test(e.target.value)) {
            setBudget(e.target.value);
        }
    }

    return (
        <div id="budget-calculator">
            <div className="header">
                <span>
                    Budget Calculator
                </span>
            </div>
            <div className="budget-form-container">
                
                <div className="budget-input-container">
                    <div className="budget-input-helptext">
                        Please enter your desired budget below
                    </div>
                    $
                    <input
                        type="text"
                        name="budget"
                        className="budget-input"
                        value={budget}
                        onChange={budgetOnChange}
                    />
                </div>
                {budget && <div>
                 wow   
                </div>}
            </div>
        </div>
    );
};

export default BudgetCalculator;