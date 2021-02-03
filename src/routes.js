import { Switch, Route } from "react-router-dom";
import Initial from "./pages/Initial";
import Header from "./components/Header";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import Cart from "./pages/Cart";

function ProductsFeed() {
  return (
    <>
      <Header />
      <Feed />
    </>
  );
}

function MyCart() {
  return (
    <>
      <Header />
      <Cart />
    </>
  );
}

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Initial} />
      <Route path="/register" component={Register} />
      <Route path="/feed" component={ProductsFeed} />
      <Route path="/cart" component={MyCart} />
    </Switch>
  );
}

export default Routes;
