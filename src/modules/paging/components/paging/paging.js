import Pager from "react-pager";
import React, { PureComponent } from "react";
import "./paging.css";

class Paging extends PureComponent {
  handlePageChanged = nextPage => {
    const currentPage = nextPage;
    this.props.updatePaging({ currentPage });
  };

  render() {
    const { paging } = this.props;
    if (paging.totalPages === 0) return null;

    return (
      <Pager
        total={paging.totalPages}
        current={paging.currentPage}
        visiblePages={3}
        onPageChanged={nextPage => this.handlePageChanged(nextPage)}
      />
    );
  }
}

export default Paging;
