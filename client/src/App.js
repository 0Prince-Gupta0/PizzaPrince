import "./App.css";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import TopBar from "./components/topBar";
import about from "./components/about"
import contact from "./components/contact"
import policy from "./components/policy"
import NavBar from "./components/navbar";
import home from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Order from "./screens/OrderScreen"
import Admin from "./screens/AdminScreen"
import UserList from "./components/Admin/UserList";
import Pizzaslist from "./components/Admin/PizzaList";
import OrderList from "./components/Admin/OrderList";
import AddNewPizza from "./components/Admin/AddNewPizza";
import EditPizza from "./components/Admin/EditPizza";

function App() {
  return (
    <BrowserRouter>
        <TopBar />
        <NavBar />
        <Switch>
        
        <Route path="/admin/userlist" component={UserList} exact />
        <Route path="/admin/pizzalist" component={Pizzaslist} exact />
        <Route path="/admin/orderlist" component={OrderList} exact />
        <Route path="/admin/addNewPizza" component={AddNewPizza} exact />
        <Route path="/admin/editpizza/:pizzaId" component={EditPizza} exact />
        
        <Route path="/Admin" component={Admin} exact />
        <Route path="/orders" component={Order} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
          <Route path="/cart" component={CartScreen} exact />
          <Route path="/about" component={about} exact  />
          <Route path="/contact" component={contact} exact />
          <Route path="/policy" component={policy} exact />
          <Route path="/" component={home} exact />
        </Switch>        
    </BrowserRouter>
  );
}

export default App;