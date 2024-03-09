import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterView from "./feature/counter/CounterView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Counter App</h1>
        <CounterView />
      </div>
    </>
  );
}

export default App;
