import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handledeccrement = () => {
    setCount(count - 1)
  }
  const handlereset = () => {
    setCount(0)
  }
  return <div className="counter">
    <p>Counter: {count}</p>
    <button onClick={handleIncrement}>increment</button>
    <button onClick={handledeccrement}>deccrement</button>
    <button onClick={handlereset}>reset</button>
  </div>;
}

export default Counter;
