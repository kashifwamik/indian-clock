import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import ClockHeading from "./components/clockHeading";
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
