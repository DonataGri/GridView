import GridView from "./components/Grid/GridView";

function App() {
  const buttons = [
    [1, 1],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 1],
    [3, 3],
  ];
  return (
    <>
      <GridView buttons={buttons} />
    </>
  );
}

export default App;
