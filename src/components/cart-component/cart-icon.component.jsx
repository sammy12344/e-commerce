import React from "react";
import { ReactComponent as Shoppingicon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { toggleCart } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CartIcon = ({ toggleCart }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <Shoppingicon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
