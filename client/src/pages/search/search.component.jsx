import React from "react";
import { connect } from "react-redux";

class SearchPage extends React.Component {
  constructor() {
    super();

    this.state = {
      results: [],
    };
  }

  render() {
    const products = this.props.products;
    console.log("Here's the products", products);
    return (
      <div>
        Search Page
        {products.map((prod) => {
          return <h1 key={1}>{prod}</h1>;
        })}
      </div>
    );
  }
}

const mapStateToProps = (root) => ({
  products: root.search.products,
});

export default connect(mapStateToProps)(SearchPage);
