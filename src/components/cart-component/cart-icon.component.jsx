import React from "react";
import { ReactComponent as Shoppingicon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { toggleCart } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CartIcon = ({ toggleCart, itemCount }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <Shoppingicon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
