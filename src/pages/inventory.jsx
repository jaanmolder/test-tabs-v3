import { textInventory } from "../setup/params";
import style from "../css/pages.module.css";
import React from 'react';
import {bindLifecycle} from 'react-keep-alive';


// @bindLifecycle
class Inventory extends React.Component {
    render() {
        return (
            <main>
                <div className={style.body}>
                    <h2>{textInventory}</h2>
                    <input />
                </div>
            </main>
        );
    }
}

// const Inventory = () => {
//   return (
//     <main>
//       <div className={style.body}>
//         <h2>{textInventory}</h2>
//         <input />
//       </div>
//     </main>
//   );
// };
//
export default Inventory;
