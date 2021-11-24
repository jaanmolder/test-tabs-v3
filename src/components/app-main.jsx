import Menu from "./menu";
import Tabs from "./tabs";
import MainOutput from "./main-output";
import style from "./app-main.module.css";

const AppMain = ({ menu, setMenu, prevLink, setPrevLink }) => {
  return (
    <div className={style.body}>
      <Menu
        menu={menu}
        setMenu={setMenu}
        prevLink={prevLink}
        setPrevLink={setPrevLink}
      />
      <Tabs
        menu={menu}
        setMenu={setMenu}
        prevLink={prevLink}
        setPrevLink={setPrevLink}
      />
      <MainOutput menu={menu} setMenu={setMenu} />
    </div>
  );
};

export default AppMain;
