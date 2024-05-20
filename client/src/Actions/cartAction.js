export const addToCart = (pizza, quantity, variant, crust, topping) => (dispatch, getState) => {
    var cartItem = {
      name: pizza.name,
      _id: pizza._id,
      image: pizza.image,
      variant: variant,
      quantity: Number(quantity),
      prices: pizza.prices,
      crust:crust,
      topping:topping,
      price: pizza.prices[0][variant] * quantity,
    };
    if (cartItem.quantity > 10) {
      alert("you Can only add 10 pizzas");
    } else {
      if (cartItem.quantity < 1) {
        dispatch({ type: "DELETE_FROM_CART", payload: pizza });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
        localStorage.setItem(
          "cartItems",
          JSON.stringify(getState().cartReducer.cartItems)
        );
      }
    }
  };
  
  export const deleteFromCart = (pizza) => (dispatch, getState) => {
    dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    const cartItems = getState().cartReducer.cartitems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  
  