import React, { useMemo, useState } from "react";

function slowFunction(num: number) {
  console.log("Heavy calculation running...");
  for (let i = 0; i < 1e9; i++) {} // simulate heavy work
  return num * 2;
}

export default function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const result = useMemo(() => {
    return slowFunction(number);
  }, []);

  return (
    <div>
      <h2>Result: {result}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Count ({count})
      </button>
    </div>
  );
}
