import React from "react";
import {
  selectTotalPrice,
  selectCartItems,
} from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} sex="sex" cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  totalPrice: selectTotalPrice,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage);
