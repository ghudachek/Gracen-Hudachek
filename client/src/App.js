import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import { DigitalArt } from "./screens/DigitalArt/DigitalArt";

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
        <Route path="/artwork">
          <DigitalArt />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
