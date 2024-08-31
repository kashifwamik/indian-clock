import "./App.css";

import ClockHeading from "./components/ClockHeading";
import ClockDescription from "./components/ClockDescription";
import CurrentTime from "./components/CurrentTime";

function App() {
  return (
    <center className="app-container">
      <ClockHeading />
      <ClockDescription />
      <CurrentTime />
    </center>
  );
}

export default App;
