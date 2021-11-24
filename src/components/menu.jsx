import { useNavigate } from "react-router-dom";
import style from "./menu.module.css";
import { menuItems } from "./menu-param";
// import { setActiveTab } from "./func/tab-func";

const Menu = ({ menu, setMenu }) => {
  const navigate = useNavigate();

  const clickHandler = (link) => {
    try {
      // setActiveTab(menu, setMenu, link);
      navigate(link);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={style.body}>
        <div className={style.menu}>
          <nav>
            {menuItems.map((i) => (
              <button
                key={i.id}
                className={style.menuButton}
                onClick={() => {
                  clickHandler(i.link);
                }}
              >
                <img
                  src={i.icon}
                  alt={i.text}
                  className={style.menuButtonIcon}
                />
                <br />
                {i.text}
                <br />
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
