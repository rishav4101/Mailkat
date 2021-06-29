import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

export const makeStore = () => {
  let store;

  const sagaMiddleware = createSagaMiddleware();

  const isClient = typeof window !== "undefined";

  if (isClient) {
    const { persistStore } = require("redux-persist");

    store = createStore(
      rootReducer,
      applyMiddleware(sagaMiddleware)
    );
    store.sagaTask = sagaMiddleware.run(rootSaga);
    store.sagaTask.toPromise().catch(error => {
      console.log(error);
      throw error;
    });
    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(
      rootReducer,
      applyMiddleware(sagaMiddleware)
    );
    store.sagaTask = sagaMiddleware.run(rootSaga);
    store.sagaTask.toPromise().catch(error => {
      console.log(error);
      throw error;
    });
  }

  return store;
};

const wrapper = createWrapper(makeStore);
export { wrapper };