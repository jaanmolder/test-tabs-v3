import {textInventory, textOrders} from "../setup/params";
import style from "../css/pages.module.css";
import React from 'react';

// const Orders = () => {
//   return (
//     <main className={style.body}>
//       <h2>{textOrders}</h2>
//       <input />
//     </main>
//   );
// };

class Orders extends React.Component {
    render() {
        return (
            <main className={style.body}>
                <h2>{textOrders}</h2>
                <input />
            </main>
        );
    }
}

export default Orders;
