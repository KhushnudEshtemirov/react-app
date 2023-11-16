import log from "loglevel";

import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    log.error("This is error message");
  }, []);

  return (
    <div className="App">
      <h1>Khushnud</h1>
    </div>
  );
}

export default App;
