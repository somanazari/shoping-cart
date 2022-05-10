import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import SignUpPage from "./Pages/SignUpPage";

const routes = [
  { path: "/cart", component: CartPage },
  { path: "/profile", component: ProfilePage },
  { path: "/login", component: LoginPage },
  { path: "/signup", component: SignUpPage },
  { path: "/checkout", component: CheckoutPage },
  { path: "/", component: HomePage },
];

export default routes;
