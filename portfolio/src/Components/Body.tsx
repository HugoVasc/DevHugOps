import { useState } from "react";

export function Body() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex-1">
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
}
