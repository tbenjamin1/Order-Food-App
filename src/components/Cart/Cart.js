import React from "react";
import { useContext,useState} from "react";
import CartItem from "./CartItem";
import CartContext from "../../store/Cart-Context";

import Model from "../UI/Model";
import classes from "./Cart.module.css";
import CheckOut from "./CheckOut";

const Cart = (props) => {
  // const [order,setOrder]= useState(false);
  const [orderForm,setOrderForm]= useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const items = cartCtx.items;
  //   if(items.length >0){
  // setOrder(true);
  //   }else{
  //     setOrder(false);
  //   };
  const order = items.length > 0;
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item,amount:1});
  };

  const cartItemRemoveHandler = (id) => {
   cartCtx.removeItem(id);
  };

  const orderHandler=()=> {
setOrderForm(true)
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {" "}
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd ={cartItemAddHandler.bind(null,item)}
        />
      ))}
      ;
    </ul>
  );


const modalActions =(
<div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          close
        </button>
        {order && <button className={classes.button}   onClick={orderHandler} >order</button>}
      </div>
);

  return (
    <Model onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span> total amount </span>
        <span>{totalAmount}</span>
      </div>
      { orderForm && <CheckOut  onCancel={props.onClose} />}
      {!orderForm && modalActions }
      
    </Model>
  );
};

export default Cart;
