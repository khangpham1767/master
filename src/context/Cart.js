import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cartItem, setCart] = useState([]);
  const addToCart = (produce) => {
    setCart(cartItem.concat(produce));
  };
  return (
    <CartContext.Provider
      value={{
        cartItem,
        addToCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
