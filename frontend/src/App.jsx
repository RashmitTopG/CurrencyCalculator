import { useState } from "react";
import { Drop } from "./Drop";
import "./App.css";
import { Test } from "./Test";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Test /> */}
      <Drop />
    </>
  );
}

export default App;
