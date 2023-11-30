import logger from "./logger";

import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    logger.trace("This is trace message");
    logger.info("This is info message");
    logger.debug("This is debug message");
    logger.warn("This is warn message");
    logger.error("This is error message");
  }, []);

  return (
    <div className="App">
      <h1>Khushnud</h1>
      <p>New text</p>
      <button>New button</button>
      <button
        onClick={() => {
          throw new Error("Error occurred on line 8");
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
