import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import videoReducer from "./reducer";

function getStore() {
  const middlewares = [thunk];

  let store: any = createStore(
    videoReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return { store };
}

export default getStore();
