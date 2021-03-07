import React from "react";
import "./cart-dropdown.styles.scss";
import { withRouter } from "react-router-dom";
import CustomBUtton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.action";
import CartItem from "../cart-item-component/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomBUtton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCart());
        }}
      >
        GO TO CHECKOUT
      </CustomBUtton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
