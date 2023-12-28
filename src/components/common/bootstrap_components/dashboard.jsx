// Counter.jsx
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/actions';

function Dashboard(props) {
  return (
    <div>
        <h4>Counter with redux</h4>
      <h6>Count: {props.count}</h6>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  };
};

export default connect(mapStateToProps, { increment, decrement })(Dashboard);
