import { createStore, combineReducers } from "redux";
import webReducers from "./web/webReducers";
import filterReducers from "./filter/filterReducers";

const reducers = combineReducers({
    web: webReducers,
    filter: filterReducers,
});

const store = createStore(reducers);

export default store;
