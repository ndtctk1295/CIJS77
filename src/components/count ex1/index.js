import "./styles.css";
import { useState } from "react";
const Counter = () => {
  const [counter, setCount] = useState(100);

  const Increase = () => {
    setCount(counter + 1);
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={Increase}>Click me to add 1</button>
    </div>
  );
};

export default Counter;
