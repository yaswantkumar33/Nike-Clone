import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3 className="text-2xl font-bold text-[#363636]">Hello World !</h3>
    </>
  );
}

export default App;
