import {
  linkInventory,
  linkOrders,
  linkShipping,
  textInventory,
  textOrders,
  textShipping,
} from "../setup/params";
import iconTruck from "../icons/truck-white.png";
import iconShopping from "../icons/bag-white.png";
import iconBox from "../icons/boxes-white.png";

export const menuItems = [
  {
    id: 1,
    text: textInventory,
    link: linkInventory,
    icon: iconBox,
    open: false,
    active: false,
    keepAliveDisabled: false,
  },
  {
    id: 2,
    text: textOrders,
    link: linkOrders,
    icon: iconShopping,
    open: false,
    active: false,
    keepAliveDisabled: false,
  },
  {
    id: 3,
    text: textShipping,
    link: linkShipping,
    icon: iconTruck,
    open: false,
    active: false,
    keepAliveDisabled: false,
  },
];
