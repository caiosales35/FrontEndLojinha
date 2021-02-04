import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
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

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Initial} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/feed" component={ProductsFeed} />
      <PrivateRoute path="/cart" component={MyCart} />
    </Switch>
  );
}

export default Routes;
