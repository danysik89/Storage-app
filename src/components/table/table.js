import React, { Component } from 'react';

import TableItem from '../table-item'
import './table.css';

import { connect } from 'react-redux'
import { withItemstoreService } from '../hoc';

class Table extends Component {

  componentDidMount() {
    const { itemstoreService } = this.props;
    const data = itemstoreService.getItems();

    this.props.itemsLoaded(data);
  }
      
  render() {
    const { items } = this.props;
    const tableData = items.map((item) => {
      return <TableItem key={item.id} itemData={item}/>
    });

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Number</th>
            <th scope="col">Price</th>
            {/* Action component? */}
            <th scope="col" className="action-col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    );
  }
  
};

const mapStateToProps = ({ items }) => {
  return { items };
};

const mapDispatchToProps = (dispatch) => {
  return {
    itemsLoaded: (newItems) => {
      dispatch({
        type: 'ITEMS_LOADED',
        payload: newItems
      });
    }
  };
};

export default withItemstoreService()(connect(mapStateToProps, mapDispatchToProps)(Table));