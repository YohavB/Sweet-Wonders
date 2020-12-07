import "./App.css";

import Appview from "./Appview";

import Data from "./Data";

import InstaData from "./InstaData";

function App() {
  return (
    <div className="App">
      <Appview Data={Data} InstaData={InstaData} />
   
    </div>
  );
}

export default App;
