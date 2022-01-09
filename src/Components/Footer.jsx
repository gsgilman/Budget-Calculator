import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = ({ selectedItems, budget }) => {
    const [totalLowPrice, setTotalLowPrice] = useState(0)
    const [totalHighPrice, setTotalHighPrice] = useState(0)
    
    useEffect(() => {
        let lowPrice = 0;
        let highPrice = 0;
        selectedItems.forEach((item) => {
            lowPrice += parseInt(item.lowPrice)
            highPrice += parseInt(item.highPrice)
        });
        setTotalLowPrice(lowPrice);
        setTotalHighPrice(highPrice);
    }, [selectedItems]);
    

    const parsedBudget = parseInt(budget);

    const calcOutcomeText = () => {
        if (parsedBudget && totalHighPrice) {
            if (parsedBudget > totalLowPrice && parsedBudget < totalHighPrice) {
                return <span>The minumum cost is <span style={{ color: "green" }}>${parsedBudget - totalLowPrice}</span> under your budget and the maximum cost is <span style={{color: "red"}}>${totalHighPrice - parsedBudget}</span> over your budget.</span>;
            } else if (parsedBudget > totalHighPrice) {
                return <span>The maximum cost is <span style={{color: "green"}}>${totalHighPrice - parsedBudget}</span> under your budget.</span>
            } else {
                return  <span>The minimum cost is <span style={{color: "red"}}>${totalHighPrice - parsedBudget}</span> over your budget.</span>;
            }
        }
        return "";
    }
    return (
        <div className={"footer"}>
            <div className="metrics">
                <div className="title">
                    <div className="budget">YOUR<br/>BUDGET</div>
                    <div className="total-low-price">MINIMUM<br/>COST</div>
                    <div className="total-high-price">MAXIMUM<br/>COST</div>
                </div>
                <div className="data">
                    <div className="budget">${budget !== "" ? budget : 0 }</div>
                    <div className="total-low-price">${totalLowPrice}</div>
                    <div className="total-high-price">${totalHighPrice}</div>
                </div>
            </div>
            <div className="outcome">
                <span>{calcOutcomeText()}</span>
            </div>
        </div>
    );
}

export default Footer;