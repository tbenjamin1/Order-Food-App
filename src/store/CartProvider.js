import React from "react";
import CartContext from "./Cart-Context";
import { useReducer } from "react";

const defaultCartState = {
  // default value that should be returned in reducer function  for the first evaulation of component
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // check if item is part of cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // keeps the existing item in cart otherwise it will be null
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      // copy exsitingitem in cart into  updatedItem and update amount

      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      // update exsting items only in updatedItems

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,

      totalAmount: updateTotalAmount,
    };
  }

  // to reduce amount of  item from cart using - button
  if (action.type === "remove") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const exsitingItem = state.items[existingCartItemIndex];

    const updateTotalAmount = state.totalAmount - exsitingItem.price;
    let updatedItems;
    if (exsitingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...exsitingItem, amount: exsitingItem.amount - 1 };
      updatedItems = [...state.items];

      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    //function to add item on cart
    dispatchCartState({
      type: "ADD",
      item: item,
    });
  };
  const removeItemFromCarterHandler = (id) => {
    // function to remove item on cart
    dispatchCartState({
      type: "remove",
      id: id,
    });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCarterHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
