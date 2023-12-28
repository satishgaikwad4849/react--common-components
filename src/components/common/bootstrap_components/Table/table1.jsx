import React from 'react';
import Table from 'react-bootstrap/Table';
import { tableHeaders, tableData } from '../../../constants/constants.jsx';

const withBasicTableData = (WrappedComponent) => {
  return function BasicReusableTable() {
    return <WrappedComponent headers={tableHeaders} data={tableData} />;
  };
};

function BasicTable({ headers, data }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

const BasicReusableTable = withBasicTableData(BasicTable);

export default BasicReusableTable;
