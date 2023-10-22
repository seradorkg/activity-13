/* eslint-disable react/prop-types */
function CounterDisplay({ count }) {
  return <h1 style={{ color: count >= 5 ? "red" : "black" }}>{count}</h1>;
}

export default CounterDisplay;
