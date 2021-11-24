import { textShipping } from "../setup/params";
import style from "../css/pages.module.css";
import { useState } from "react";

const Shipping = () => {
  const [value, setValue] = useState("");

  return (
    <main>
      <div className={style.body}>
        <h2>{textShipping}</h2>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <br />
        <span>Comment</span>
        <br />
        <input />
      </div>
    </main>
  );
};

export default Shipping;
