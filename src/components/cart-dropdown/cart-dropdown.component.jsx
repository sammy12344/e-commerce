import React from "react";

import "./cart-dropdown.styles.scss";
import CustomBUtton from "../custom-button/custom-button.component";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-item"></div>
    <CustomBUtton>GO TO CHECKOUT</CustomBUtton>
  </div>
);

export default CartDropDown;
