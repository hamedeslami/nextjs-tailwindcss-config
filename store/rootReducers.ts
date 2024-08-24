import { combineReducers } from "redux";
import userReducers from "@/store/user/auth.reducers";

export const rootReducers = combineReducers({
    user: userReducers,
});