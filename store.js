import { createStore } from "redux";
import counterReducer from "./src/services/reducers/CounterReducer";

const store = createStore(counterReducer);
export default store;