import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Initial Store And Reducer
import initialState from "./context/store";
import searchReducer from "./context/reducer/searchReducer";

// Context Provider Import
import { StateProvider } from "./context/context";

// Component Import
import Home from "./B2C/Home/Home";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={searchReducer}>
      <Router>
        <Switch>
          <Route to="/" component={Home} />
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
