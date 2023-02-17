function App() {
  const [nodes, setNodes] = useState([]);

  const handleAddNode = (value, parent) => {
    const newNode = new BinarySearchTreeNode(value);
    parent.insert(newNode);
    setNodes([...nodes]);
  };

  return (
    <div>
      <TextBox onInsert={(value) => setNodes([...nodes, value])} />
      <BinaryTree nodes={nodes} onAddNode={handleAddNode} />
    </div>
  );
}
