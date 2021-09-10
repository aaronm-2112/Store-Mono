import React from "react";
import { connect } from "react-redux";
import SearchItem from "../../components/search-item/search-item.component";

class SearchPage extends React.Component {
  constructor() {
    super();

    this.state = {
      results: [],
    };
  }

  render() {
    const products = this.props.products;
    return (
      <div>
        Search Page
        {products.map((product) => {
          return <SearchItem key={product.id} {...product}></SearchItem>;
        })}
      </div>
    );
  }
}

const mapStateToProps = (root) => ({
  products: root.search.products,
});

export default connect(mapStateToProps)(SearchPage);
