import logger from "./logger";

import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    logger.info("This is info message");
  }, []);

  return (
    <div className="App">
      <h1>Khushnud</h1>
    </div>
  );
}

export default App;
