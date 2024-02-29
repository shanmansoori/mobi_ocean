import { combineReducers } from "redux";
import dashboard from "./dashboard.reducer";

const rootReducer = combineReducers({
  dashboardReducer: dashboard,
});

export default rootReducer;
