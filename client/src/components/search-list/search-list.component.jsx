import React from "react";
import SearchItem from "../search-item/search-item.component";
import { connect } from "react-redux";
import "./search-list.styles.scss";

const SearchList = ({ products }) => {
  return (
    <div className="search-list">
      {products.map((product) => {
        return <SearchItem key={product.id} {...product}></SearchItem>;
      })}
    </div>
  );
};

const mapStateToProps = (root) => ({
  products: root.search.products,
});

export default connect(mapStateToProps)(SearchList);
