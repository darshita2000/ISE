import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Orderslist from "./Orderslist";
import Userslist from "./Userslist";
import Pizzaslist from "./Pizzaslist";
import Addpizza from "./Addpizza";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

export default function Adminscreen() {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="col-md-8 mx-auto p-3 ">
      <div className="flex-container">
        <div className="text-center w-100 m-1">
          <h2 className="mb-3" style={{ fontSize: "35px" }}>
            Admin Panel
          </h2>
          <ul className="adminfunctions">
            <li>
              <Link to={"/admin/userslist"}>Users list</Link>
            </li>
            <li>
              <Link to={"/admin/pizzaslist"}>Pizzas list</Link>
            </li>
            <li>
              <Link to={"/admin/orderslist"}>Orders list</Link>
            </li>
            <li>
              <Link to={"/admin/addpizza"}>Add New Pizza</Link>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
