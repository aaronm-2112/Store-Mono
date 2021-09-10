import React from "react";
import "./search-item.styles.scss";

const SearchItem = ({ name, price }) => {
  return (
    <div className="search-item">
      <img src="hs" alt="Eventually something" />
      <h3>{name}</h3>
      <span className="currency-symbol">&#36;</span>
      <span className="price">{price}</span>
    </div>
  );
};

export default SearchItem;
