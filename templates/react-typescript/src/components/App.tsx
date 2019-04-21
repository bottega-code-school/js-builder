import * as React from "react";

import Hello from "./Hello";
import HelloWithHooks from "./HelloWithHooks";

const App = () => {
  return (
    <div>
      <Hello compiler={"TS"} framework={"React"} />
      <HelloWithHooks />
    </div>
  );
};

export default App;
