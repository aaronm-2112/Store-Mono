import React from "react";
import { connect } from "react-redux";
import SearchList from "../../components/search-list/search-list.component";
import withSpinner from "../../components/with-spinner/with-spinner.component";

const SearchListWithSpinner = withSpinner(SearchList);

class SearchPage extends React.Component {
  render() {
    let { isLoading } = this.props;
    return (
      <SearchListWithSpinner isLoading={isLoading}></SearchListWithSpinner>
    );
  }
}

const mapStateToProps = (root) => ({
  isLoading: root.search.isFetching,
});

export default connect(mapStateToProps, null)(SearchPage);
