import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Initial from "./pages/Initial";
import Header from "./components/Header";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

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

function PublicRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Redirect
            to={{ pathname: "/feed", state: { from: props.location } }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

function Routes() {
  return (
    <Switch>
      <PublicRoute path="/" exact component={Initial} />
      <PublicRoute path="/register" component={Register} />
      <PrivateRoute path="/feed" component={ProductsFeed} />
      <PrivateRoute path="/cart" component={MyCart} />
      <PrivateRoute path="/checkout" component={Checkout} />
    </Switch>
  );
}

export default Routes;
