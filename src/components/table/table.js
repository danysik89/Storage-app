import React, { Component } from 'react';

import TableItem from '../table-item'
import './table.css';

import { connect } from 'react-redux'

// const Table = ({tableData}) => {
class Table extends Component {
      
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
  return { items }
}

export default connect(mapStateToProps)(Table);