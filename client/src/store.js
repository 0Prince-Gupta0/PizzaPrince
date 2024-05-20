import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getAllPizzaReducer,
  addPizzaReducer,
  getPizzaByIdReducer,
  updatePizzaByIdReducer,
} from "./Reducer/pizzaReducer";
import { cartReducer } from "./Reducer/cartReducer";
import {
  registerUserReducer,
  loginUserReducer,
  getAllUsersReducer,
} from "./Reducer/userReducer";
import {
  placeOrderReducer,
  getUserOrdersReducer,
  allUserOrdersReducer,
} from "./Reducer/orderReducer";
const cartItems = [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addPizzaReducer: addPizzaReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  updatePizzaByIdReducer: updatePizzaByIdReducer,
  allUserOrdersReducer: allUserOrdersReducer,
  getAllUsersReducer: getAllUsersReducer,
});

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;