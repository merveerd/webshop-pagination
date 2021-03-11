import { BASKET_ADD, BASKET_REDUCE } from "../actions/types";

const INITIAL_STATE = {
  basket: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BASKET_ADD:
      let refBasket = [...state.basket];
      let updatedProductIndex = refBasket.findIndex(
        (product) => product.name === action.payload.name
      );

      if (updatedProductIndex > -1) {
        let updatedProduct = refBasket[updatedProductIndex];

        refBasket[updatedProductIndex] = {
          ...action.payload,
          quantity: updatedProduct.quantity + 1,
        };
      } else {
        refBasket.push({ ...action.payload, quantity: 1 });
      }

      return { ...state, basket: refBasket };

    case BASKET_REDUCE:
      let refRemovingBasket = [...state.basket];
      let removingProductIndex = refRemovingBasket.findIndex(
        (product) => product.name === action.payload.name
      );

      if (removingProductIndex > -1) {
        //in case of the quantity is already zero in a moment
        let decreasedProduct = refRemovingBasket[removingProductIndex];
        if (decreasedProduct.quantity === 1) {
          refRemovingBasket.splice(removingProductIndex, 1);
        } else {
          refRemovingBasket[removingProductIndex] = {
            ...action.payload,
            quantity: decreasedProduct.quantity - 1,
          };
        }
      }

      return { ...state, basket: refRemovingBasket };

    default:
      return state;
  }
};

export const totalPrice = (state) => {
  return state.basket.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
};

export default reducer;
