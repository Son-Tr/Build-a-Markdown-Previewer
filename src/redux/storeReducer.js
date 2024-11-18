import { createStore } from "redux";
import markdownReducer from "./markdownReducer";

export const store = createStore(markdownReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

 
