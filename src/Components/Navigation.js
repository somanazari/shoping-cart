import { NavLink, withRouter } from "react-router-dom";
import { useCart } from "../Context/Cart/CartProvider";
import {
  RiShoppingCartLine,
  RiHomeLine,
  RiHomeFill,
  RiShoppingCartFill,
  RiUser3Line,
  RiUser3Fill,
  RiLoginBoxLine,
  RiLoginBoxFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { UseAuth } from "../Context/Auth/AuthProvider";

const Navigation = ({ location }) => {
  const auth = UseAuth();

  const { cart } = useCart();

  return (
    <header>
      <div className="logo">
        <div></div>
        <h1>Shopping App</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact={true}>
              {location.pathname == "/" ? (
                <RiHomeFill className="icon" />
              ) : (
                <RiHomeLine className="icon" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              {location.pathname == "/cart" ? (
                <RiShoppingCartFill className="icon" />
              ) : (
                <RiShoppingCartLine className="icon" />
              )}
            </NavLink>
            {cart.length > 0 && (
              <div className="number">
                <span>{cart.length}</span>
              </div>
            )}
          </li>
          <li>
            <Link to={auth ? "/profile" : "/signup"}>
              {auth ? (
                location.pathname == "/profile" ? (
                  <RiUser3Fill className="icon" />
                ) : (
                  <RiUser3Line className="icon" />
                )
              ) : location.pathname == "/login" ||
                location.pathname == "/signup" ? (
                <RiLoginBoxFill className="icon" />
              ) : (
                <RiLoginBoxLine className="icon" />
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navigation);
