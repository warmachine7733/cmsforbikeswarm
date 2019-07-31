import { combineReducers } from "redux";
import { cms } from "./cms/reducer";
import { companies } from "./companies/reducer";

const appReducer = combineReducers({ cms, companies });
export default appReducer;
