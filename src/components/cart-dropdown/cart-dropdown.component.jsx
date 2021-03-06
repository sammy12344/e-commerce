import React from "react";

import "./cart-dropdown.styles.scss";
import CustomBUtton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item-component/cart-item.component";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomBUtton>GO TO CHECKOUT</CustomBUtton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
