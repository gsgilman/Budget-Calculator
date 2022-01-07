import React, { useState } from "react";
import "./BudgetCalculator.css"

const isNumberRegex = /(^\d+$)|(^$)/;   

const BudgetCalculator = ({ items }) => {
    const [budget, setBudget] = useState(0);

    const budgetOnChange = (e) => {
        if (isNumberRegex.test(e.target.value)) {
            setBudget(e.target.value);
        }
    }
    
    const sortItemsByType = (itemsArr) => {
        const itemMap = {}
        itemsArr.forEach((i) => {
            itemMap[i.type] = itemMap[i.type] ? [i] : itemMap[i.type] << i
        })
        console.log(itemMap)
        return itemMap;
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
            </div>
        </div>
    );
};

export default BudgetCalculator;