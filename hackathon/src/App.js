import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import FocusPosts from "./pages/FocusPosts";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/focusUp/:name/:id" exact component={FocusPosts} />

        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </Router>
  );
}

export default App;
