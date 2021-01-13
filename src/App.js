import "./App.css";

import Appview from "./UserPath/Appview";
import lang from "./mock/langSelector";
import Adminview from "./AdminPath/Adminview";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={() => <Appview Data={lang} />} />

        <Route
          exact
          path="/admin"
          component={() => <Adminview Data={lang} />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
