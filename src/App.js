import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Appview from "./Appview";
import Data from "./Data";
import InstaData from "./InstaData";
import Admin from "./Admin Path/Adminview";
import Login from "./Login";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import SignUp from "./SignUp";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            component={() => <Appview InstaData={InstaData} Data={Data} />}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />

          <PrivateRoute
            exact
            path="/admin"
            component={() => <Admin Data={Data} InstaData={InstaData} />}
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
