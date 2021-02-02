import { BrowserRouter, Switch, Route } from "react-router-dom";
import Initial from "./pages/Initial";
import Register from "./pages/Register";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Initial} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
