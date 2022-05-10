import { useCart, useCartActions } from "../Context/Cart/CartProvider";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiPlusSm, HiMinusSm, HiOutlineTrash } from "react-icons/hi";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();

  const incrementHandler = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  };

  const decrementHandler = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });
  };

  if (cart.length == 0) {
    return (
      <>
        <h3 className="emptyCart">Cart Is Empty !</h3>
        <Link to="/" className="shoppingLink">
          Go To Shopping{" "}
        </Link>
      </>
    );
  }

  return (
    <section className="cart">
      <article>
        {cart.map((item) => (
          <div className="singleProduct" key={item.id}>
            <div className="addedProduct">
              <div>
                <img src={item.image} />
                <h2>{item.name}</h2>
                <span>${item.price * item.quantity}</span>
              </div>

              <div className="quantity">
                <div
                  className="iconBox"
                  onClick={() => incrementHandler(item.id)}
                >
                  <HiPlusSm />
                </div>
                <div className="number">{item.quantity}</div>
                <div
                  className={`iconBox ${item.quantity == 1 && "trash"}`}
                  onClick={() => decrementHandler(item.id)}
                >
                  {item.quantity == 1 ? <HiOutlineTrash /> : <HiMinusSm />}
                </div>
              </div>
              <div className="description">
                <ul>
                  {item.description.map((desc, index) => (
                    <li key={index}>
                      <FaRegCheckCircle className="icon" />
                      {desc.support}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </article>
      <CartSummery cart={cart} total={total} />
    </section>
  );
};

export default CartPage;

const CartSummery = ({ total, cart }) => {
  const originalPrice = cart.length
    ? cart.reduce(
        // accumulator => save preve data in itself
        // current => the current member of array that progress
        (accumulator, current) =>
          accumulator + current.quantity * current.price,
        // 0 => is first value of accumulator
        0
      )
    : 0;

  return (
    <aside>
      <h1>Cart Summery:</h1>
      <div>
        <h3>Original Total Price:</h3>
        <span>${originalPrice}</span>
      </div>
      <div>
        <h3>Cart Discount:</h3>
        <span>${originalPrice - total}</span>
      </div>
      <hr />
      <div>
        <h3>Net Price:</h3>
        <span>${total}</span>
      </div>
      <Link to="/signup?redirect=checkout" className="checkoutBtn">
        Go To Checkout
      </Link>
    </aside>
  );
};
