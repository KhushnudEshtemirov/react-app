import logger from "./logger";

import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    logger.info("This is info message");
    logger.trace("This is trace message");
    logger.warn("This is warn message");
    logger.debug("This is debug message");
    logger.error("This is error message");
  }, []);

  return (
    <div className="App">
      <h1>Khushnud</h1>
      <p>New text</p>
      <button>New button</button>
      <button
        onClick={() => {
          throw new Error("Again new error");
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
