import "./App.css";

import Appview from "./UserPath/Appview";
import lang from "./mock/langSelector";
import Adminview from "./AdminPath/Adminview";

function App() {
  return (
    <Appview />
    // <Router>
    //   <div className="App">
    //     <Route exact path="/" component={() => <Appview Data={lang} />} />
    //     <Route exact path="/login" component={Login} />
    //
    //       <Route
    //         exact
    //         path="/admin"
    //         component={() => <AdminView Data={lang} />}
    //       />
    //
    //   </div>
    // </Router>
  );
}

export default App;
