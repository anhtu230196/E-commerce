export const addItemToCart = (cartItems, cartItemToAdd) => {
  // let index = cartItems.findIndex(
  //   (cartItem) => cartItem.id === cartItemToAdd.id
  // );
  // if (index === -1) {
  //   return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  // } else {
  //   cartItems[index] = {
  //     ...cartItems[index],
  //     quantity: cartItems[index].quantity + 1,
  //   };
  //   return [...cartItems];
  // }

  const cartItemExisting = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (cartItemExisting) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const itemExisting = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );
  if (itemExisting.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }
  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const clearAllItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};
