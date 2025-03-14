import Board from "./components/Board";
import BoardProvider from "./components/store/BoardProvider";
import ToolboxProvider from "./components/store/ToolboxProvider";
import Toolbar from "./components/Toolbar";
import Toolbox from "./components/Toolbox";

function App() {
  return (
    <BoardProvider>
      <ToolboxProvider>
        <Toolbar />
        <Board />
        <Toolbox />
      </ToolboxProvider>
    </BoardProvider>
  );
}

export default App;
