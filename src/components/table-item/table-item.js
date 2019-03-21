import React from 'react';


import './table-item.css';

const TableItem = ({itemData}) => {
    
  return (
    <tr className="table-col table-item">
      <th>{itemData.title}</th>
      <td>{itemData.number}</td>
      <td>{itemData.price}</td>

      <td>
        <button type="button"
            className="btn btn-outline-success btn-sm">
          <i className="fa fa-exclamation" />
        </button>
        <button type="button"
            className="btn btn-outline-danger btn-sm">
          <i className="fa fa-trash-o" />
        </button>
      </td>
    </tr>
  );
};

export default TableItem;