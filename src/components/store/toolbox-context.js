import { createContext } from "react";

const toolboxContext = createContext({
  changeStroke: () => {},
  changeFill: () => {},
  changeSize: () => {},
});

export default toolboxContext;
