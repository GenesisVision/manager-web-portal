import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { merge } from "utils/helpers";

import { updateFilter } from "../helpers/filtering.helpers";
import Table from "./table";

class TableContainer extends Component {
  componentDidMount() {
    if (this.props.isFetchOnMount) {
      this.updateItems();
    }
  }

  updateItems = changedFilters => {
    const { getItems, paging, sorting, filtering } = this.props;

    const filters = {
      paging,
      sorting,
      filtering,
      ...changedFilters
    };

    getItems(filters);
  };

  handleUpdateSorting = sorting => {
    this.updateItems({
      sorting,
      paging: merge(this.props.paging, {
        currentPage: 1
      })
    });
  };

  handleUpdateFilter = filter => {
    let changedFilters = {
      filtering: updateFilter(this.props.filtering, filter),
      paging: merge(this.props.paging, {
        currentPage: 1
      })
    };

    this.updateItems(changedFilters);
  };

  handleUpdatePaging = nextPageIndex => {
    let changedFilters = {
      paging: merge(this.props.paging, {
        currentPage: nextPageIndex + 1
      })
    };

    this.updateItems(changedFilters);
  };

  render() {
    const { data } = this.props;
    const items = data && data.items;

    return (
      <Table
        {...this.props}
        items={items || []}
        updateSorting={this.handleUpdateSorting}
        updatePaging={this.handleUpdatePaging}
        updateFilter={this.handleUpdateFilter}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let storePlace = ownProps.getStorePlace(state);
  var t = storePlace;
  const {
    itemsData = { isPending: false, data: { items: [] } },
    filters
  } = storePlace;

  const { sorting, paging, filtering } = filters;
  return {
    data: itemsData.data,
    sorting,
    paging,
    filtering,
    isPending: itemsData.isPending
  };
};

const mapDispatchToProps = (dispatch, { getItems }) => ({
  ...bindActionCreators({ getItems }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
