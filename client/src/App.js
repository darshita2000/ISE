import logo from "./logo.svg";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap";
import { BrowserRouter, Route, Routes, Link, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Ordersscreen from "./screens/Ordersscreen";
import Adminscreen from "./screens/Adminscreen";
import Userslist from "./screens/Userslist";
import Pizzaslist from "./screens/Pizzaslist";
import Addpizza from "./screens/Addpizza";
import Orderslist from "./screens/Orderslist";
import Editpizza from "./screens/Editpizza";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<Cartscreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/orders" element={<Ordersscreen />} />
          <Route path="/admin" element={<Adminscreen />}>
            <Route path="/admin" element={<Userslist />} />
            <Route exact path="/admin/userslist" element={<Userslist />} />
            <Route exact path="/admin/pizzaslist" element={<Pizzaslist />} />
            <Route exact path="/admin/orderslist" element={<Orderslist />} />
            <Route exact path="/admin/addpizza" element={<Addpizza />} />
            <Route
              exact
              path="/admin/editpizza/:pizzaid"
              element={<Editpizza />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
