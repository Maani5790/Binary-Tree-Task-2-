import React, { useState } from "react";
import BinaryTree from "./components/BinaryTree";
// import TextBox from "./components/TextBox";
import "./styles.css";

function App() {
  const [nodes, setNodes] = useState([]);
  const handleInsert = (value) => {
    setNodes([...nodes, value]);
  };

  return (
    <div className="App">
      <h1>binary tree react</h1>
      {/* <TextBox onInsert={handleInsert} /> */}
      <BinaryTree nodes={nodes} />
    </div>
  );
}

export default App;
