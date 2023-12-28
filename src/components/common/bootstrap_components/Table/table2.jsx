import React from 'react';
import Table from 'react-bootstrap/Table';

const withResponsiveTable = (WrappedComponent) => {
  return function ResponsiveTableWrapper() {
    return (
      <Table responsive>
        <WrappedComponent />
      </Table>
    );
  };
};

function InnerTable() {
  return (
    <>
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 12 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      </tbody>
    </>
  );
}

const ResponsiveTable = withResponsiveTable(InnerTable);

export default ResponsiveTable;
