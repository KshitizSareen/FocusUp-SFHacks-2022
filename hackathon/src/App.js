import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import FocusPosts from "./pages/FocusPosts";
import CreateFocusPostPage from "./pages/CreateFocusPost";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/focusUp/:name/:id" exact component={FocusPosts} />
        <Route
          path="/focusUp/createPost/:name/:id"
          exact
          component={CreateFocusPostPage}
        />

        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </Router>
  );
}

export default App;
