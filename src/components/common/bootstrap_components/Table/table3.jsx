import React from 'react';
import Table from 'react-bootstrap/Table';

function ResponsiveTable({ breakpoint }) {
  return (
    <Table responsive={breakpoint}>
      <thead>
        <tr>
          <th>#</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </Table>
  );
}

const withResponsiveTable = (WrappedComponent) => {
  return function ResponsiveTableWrapper() {
    return (
      <div>
        <WrappedComponent breakpoint="sm" />
        <WrappedComponent breakpoint="md" />
        <WrappedComponent breakpoint="lg" />
        <WrappedComponent breakpoint="xl" />
      </div>
    );
  };
};

const ResponsiveTableWithBreakpoints = withResponsiveTable(ResponsiveTable);

export default ResponsiveTableWithBreakpoints;
