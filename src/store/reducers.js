import { combineReducers } from "redux";
import { cms } from "./cms/reducer";

const appReducer = combineReducers({ cms });
export default appReducer;
