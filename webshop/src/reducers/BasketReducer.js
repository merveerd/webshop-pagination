import { BASKET_ADD, BASKET_REDUCE, BASKET_REMOVE } from "../actions/types";

const INITIAL_STATE = {
  basket: [],
};

// const indexFinder = (state = INITIAL_STATE) => {
//     let refBasket = [...state.basket];
//     let updatedProductIndex = refBasket.findIndex(
//       (product) => product.name === action.payload.name
//     );

// }

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

    // case BASKET_REDUCE:
    //   let refBasket = [...state.basket];
    //   let updatedProductIndex = refBasket.findIndex(
    //     (product) => product.name === action.payload.name
    //   );

    //   if (updatedProductIndex > -1) {
    //     if (updatedProduct.quantity === 1) {
    //       refBasket.splice(updatedProductIndex, 1);
    //     } else {
    //       let updatedProduct = refBasket[updatedProductIndex];

    //       refBasket[updatedProductIndex] = {
    //         ...action.payload,
    //         quantity: updatedProduct.quantity - 1,
    //       };
    //     }
    //   }

    //   return { ...state, basket: refBasket };

    default:
      return state;
  }
};
export default reducer;
