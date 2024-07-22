import { createStore } from "redux";
import { phoneBookReducer } from "./reducers.js";

const store = createStore(phoneBookReducer);

export default store;
