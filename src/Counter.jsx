import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseBy1 = () => {
    setCount(count + 1);
  };

  const decreaseBy1 = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container text-center">
      <div className="mt-5">
        <CounterDisplay count={count} />
        <br />
        <button
          type="button"
          onClick={decreaseBy1}
          className="btn btn-primary btn-lg"
        >
          Decrease
        </button>
        &nbsp;
        <button
          type="button"
          onClick={increaseBy1}
          className="btn btn-secondary btn-lg"
        >
          Increase
        </button>
      </div>
    </div>
  );
}

export default Counter;
