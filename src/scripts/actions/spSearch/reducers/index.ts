import { combineReducers } from "redux";
import { spSearchReducer } from "./spSearchReducer";

export const rootReducer = combineReducers({
    spReducer: spSearchReducer
});
