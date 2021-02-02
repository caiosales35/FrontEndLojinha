import { BrowserRouter, Switch, Route } from "react-router-dom";
import Initial from "./pages/Initial";
import Register from "./pages/Register";
import Feed from "./pages/Feed";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Initial} />
        <Route path="/register" component={Register} />
        <Route path="/feed" component={Feed} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
