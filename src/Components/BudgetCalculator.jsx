import React, { useState } from "react";
import Catalog from "./Catalog";
import "./BudgetCalculator.css"

const isNumberRegex = /(^\d+$)|(^$)/;   

const BudgetCalculator = ({ items }) => {
    const [budget, setBudget] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);

    const budgetOnChange = (e) => {
        if (isNumberRegex.test(e.target.value)) {
            setBudget(e.target.value);
        }
    }

    const selectedItemsOnChange = (item) => {
        let newItems = selectedItems;

        const existingCategory = selectedItems.findIndex((i) => i.type === item.type);
        if (existingCategory >= 0) {
            newItems.splice(existingCategory, 1, item);
        } else {
            newItems = newItems.concat(item);
        }
        setSelectedItems(newItems.map((arr) => arr));
    }
   
    return (
        <div id="budget-calculator">
            <div className="calculator-header">
                <span>
                    Budget Calculator
                </span>
            </div>
            {/*If this budget input required any more logic it would have its own component.*/}
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
            <Catalog items={items} onChange={selectedItemsOnChange} />
        </div>
    );
};

export default BudgetCalculator;