import { Route, Switch } from "react-router-dom";
import CartProvider from "./Context/Cart/CartProvider";
import Layout from "./Layout/Layout";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./Context/Auth/AuthProvider";

function App() {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <CartProvider>
          <Layout>
            <Switch>
              {routes.map((route, index) => (
                <Route key={index} {...route} />
              ))}
            </Switch>
          </Layout>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
