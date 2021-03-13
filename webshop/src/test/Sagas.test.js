// import { put, call } from "redux-saga/effects";
// import { requestDefaultItems } from "../actions/APIService";

// import { ITEMS_RECEIVED, ITEMS_FAILED } from "../actions/types";
// import { fetchDefaultItems } from "../sagas/";

// describe("product fetch", () => {
//   it("Fetches the products successfully", () => {
//     const generator = fetchDefaultItems();
//     expect(generator.next().value).toEqual(call(requestDefaultItems));
//     expect(generator.next().value).toEqual(
//       put({ type: ITEMS_RECEIVED, payload: undefined })
//     );
//   });

//   it("Handles exception as expected", () => {
//     const generator = fetchDefaultItems();
//     expect(generator.next().value).toEqual(call(requestDefaultItems));
//     expect(generator.throw("error").value).toEqual(
//       put({ type: ITEMS_FAILED, message: undefined })
//     );
//   });
// });
