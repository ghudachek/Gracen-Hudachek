import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about-me"></Route>
        <Route path="/work"></Route>
        <Route path="/contact"></Route>
      </Switch>
    </div>
  );
}

export default App;
