import React from "react";
import "./Catalog.css"

const sortItemsByType = (itemsArr) => {
    const itemMap = {}
    itemsArr.forEach((i) => {
        if (!itemMap[i.type]) {
            itemMap[i.type] = [i];
        } else if (!itemMap[i.type].find((item) => item.name === i.name)) {
            // In the real world I avoid chaining so much logic together like this,
            // however I will take the convinience here
            itemMap[i.type] = itemMap[i.type].concat(i).sort((a, b) => a.lowPrice - b.lowPrice);
        }
    })
    return itemMap;
}

const Catalog = ({ items, onChange }) => {
    const sortedItems = sortItemsByType(items);
    const categories = Object.keys(sortedItems);
    return (
        <div className={"catalog"}>
            {categories.map((key, idx) => (
                <ItemSelect
                    items={sortedItems[key]}
                    categoryName={key} key={key}
                    isFirst={idx === 0}
                    onChange={onChange}
                />
            ))}
        </div>
    )
}

const ItemSelect = ({ items, categoryName, isFirst, onChange }) => {
    return (
        // There is some redundancy here, overall the structure and
        // styling of this component is a bit less than ideal
        <div className={"item-select"}>
            {isFirst ? 
                <div className={"item-select-title"}>
                    <div className={"header"}>
                        <span className={"item-name"}>{categoryName.replaceAll(/_/ig, " ")}</span>
                        <span className={"low-price"}>Low Price</span>
                        <span className={"high-price"}>High Price</span>
                    </div>
                </div>
                :
                <div className={"item-select-title"}>
                    {categoryName.replaceAll(/_/ig, " ")}
                </div>
            }
            <div className={"item-select-list"}>
                {items.map((i, idx) => (
                    <div className={"item"} key={i.name + i.type + idx}>
                        <span className={"item-name"}>{i.name}</span>
                        <span className={"low-price"}>${i.lowPrice}</span>
                        <span className={"high-price"}>${i.highPrice}</span>
                        <input
                            type="radio"
                            id={i.name + i.type + idx}
                            name={categoryName}
                            value={i.name}
                            onChange={() => onChange(i)}
                        ></input>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Catalog;