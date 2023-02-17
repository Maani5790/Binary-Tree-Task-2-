import React, { useEffect, useRef, useState } from "react";
import {
  drawBinaryTree,
  BinarySearchTreeNode,
  VisualizationType
} from "binary-tree-visualizer";

function BinaryTree({ nodes, onAddNode }) {
  const canvasRef = useRef(null);
  const [value, setValue] = useState("");
  const [selectedNode, setSelectedNode] = useState(null);

  const handleAddNode = () => {
    if (value !== "") {
      onAddNode(parseInt(value), selectedNode);
      setValue("");
    }
  };

  useEffect(() => {
    if (canvasRef.current && nodes.length > 0) {
      const [firstEl] = nodes;
      const root = new BinarySearchTreeNode(firstEl);
      nodes.forEach((num) => root.insert(num));

      drawBinaryTree(root, canvasRef.current, {
        type: VisualizationType.PRETTY,
        maxWidth: window.innerWidth,
        maxHeight: 0,
        nodeClickCallback: (node) => setSelectedNode(node),
      });
    }
  }, [canvasRef, nodes]);

  return (
    <div>
      <canvas ref={canvasRef} />
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleAddNode}>Add Node</button>
      </div>
    </div>
  );
}

export default BinaryTree;
