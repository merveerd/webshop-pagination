import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import reducers from "./reducers";
import Page from "./pages/Page";

const sagaMiddleware = createSagaMiddleware();

const App = () => {
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
};

export default App;
