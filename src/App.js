import { useState } from "react";
import { menuItems } from "./components/menu-param";
import "./App.css";
import AppMain from "./components/app-main";
import { Route, Routes } from "react-router-dom";
import {
  linkInventory,
  linkOrders,
  linkShipping,
  textInventory,
  textOrders,
  textShipping,
} from "./setup/params";
import { KeepAlive } from "react-keep-alive";
import Orders from "./pages/orders";
import Inventory from "./pages/inventory";
import Shipping from "./pages/shipping";

export default function App() {
  const [menu, setMenu] = useState(menuItems);
  const [prevLink, setPrevLink] = useState();

  // function getMenuIndex(pathname) {
  //   return menu.findIndex((i) => i.link === pathname);
  // }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <AppMain
              menu={menu}
              setMenu={setMenu}
              prevLink={prevLink}
              setPrevLink={setPrevLink}
            />
          }
        >
          <Route
            path={linkInventory}
            element={
              <KeepAlive
                name={textInventory}
                // disabled={menu[getMenuIndex(linkInventory)].keepAliveDisabled}
              >
                <Inventory />
              </KeepAlive>
            }
          />
          <Route
            path={linkOrders}
            element={
              <KeepAlive
                name={textOrders}
                // disabled={menu[getMenuIndex(linkOrders)].keepAliveDisabled}
              >
                <Orders />
              </KeepAlive>
            }
          />
          <Route
            path={linkShipping}
            element={
              <KeepAlive
                name={textShipping}
                // disabled={menu[getMenuIndex(linkShipping)].keepAliveDisabled}
              >
                <Shipping />
              </KeepAlive>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}
