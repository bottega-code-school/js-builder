import * as React from "react";
import { useState } from "react";

const HelloWithHooks = () => {
  const [clicks, setClicks] = useState(1);
  return (
    <>
      <p>Clicks: {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>+</button>
      <button onClick={() => setClicks(clicks - 1)}>-</button>
    </>
  );
};

export default HelloWithHooks;
