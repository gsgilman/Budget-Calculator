import React from "react";
import "./Catalog.css"

const sortItemsByType = (itemsArr) => {
    const itemMap = {}
    itemsArr.forEach((i) => {
        if (!itemMap[i.type]) {
            itemMap[i.type] = [i];
        } else if (!itemMap[i.type].find((item) => item.name === i.name)) {
            itemMap[i.type] = itemMap[i.type].concat(i)
        }
    })
    return itemMap;
}

const Catalog = ({ items }) => {
    const sortedItems = sortItemsByType(items);
    const categories = Object.keys(sortedItems);
    return (
        <div className={"catalog"}>
            {categories.map((key, idx) => (
                <ItemSelect items={sortedItems[key]} categoryName={key} key={key} isFirst={idx === 0} />
            ))}
        </div>
    )
}

const ItemSelect = ({ items, categoryName, isFirst }) => {
    return (
        <div className={"item-select"}>
            {isFirst ? 
                <div className={"item-select-title"}>
                    <div className={"header"}>
                        <span className={"item-name"}>{categoryName.replace(/_/, " ")}</span>
                        <span className={"low-price"}>High Price</span>
                        <span className={"high-price"}>Low Price</span>
                    </div>
                </div>
                :
                <div className={"item-select-title"}>
                    {categoryName.replace(/_/, " ")}
                </div>
            }
            
            <div className={"item-select-list"}>
                {items.map((i, idx) => (
                    <div className={"item"} key={i.name + i.type + idx}>
                        <span className={"item-name"}>{i.name}</span>
                        <span className={"low-price"}>${i.lowPrice}</span>
                        <span className={"high-price"}>${i.highPrice}</span>
                        <input type="radio" id={i.name + i.type + idx} name={categoryName} value={i.name}></input>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Catalog;