import "./App.css";
import Graph from "./Components/Graph";
import Header from "./Components/Header";
import PatientInfo from "./Components/PatientInfo";
import TabButtons from "./Components/TabButtons";

function App() {
  return (
    <div className="app_container">
      {/* Header */}
      <Header />
      {/*patient info */}
      <PatientInfo />
      {/* buttons */}
      <TabButtons />
      {/* garaph container */}
      <Graph />
    </div>
  );
}

export default App;
