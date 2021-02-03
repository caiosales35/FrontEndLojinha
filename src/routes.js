import { Switch, Route } from "react-router-dom";
import Initial from "./pages/Initial";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import Header from "./components/Header";

function ProductsFeed() {
  return (
    <>
      <Header />
      <Feed />
    </>
  );
}

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Initial} />
      <Route path="/register" component={Register} />
      <Route path="/feed" component={ProductsFeed} />
    </Switch>
  );
}

export default Routes;
