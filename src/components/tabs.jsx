import style from "./tabs.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import {
  setActiveTab,
  setClosedTabs,
  // setKeepAliveHandler,
} from "./func/tab-func";
import { setPreviousLink } from "./func/navigation-func";

const Tabs = ({ menu, setMenu, prevLink, setPrevLink }) => {
  const location = useLocation();
  const openMenu = menu.filter((i) => i.open === true);
  // const actTab = menu.filter((i) => i.active === true);
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const clickTabHandler = (link) => {
    // console.log("!!TAB CLICK");
    // setKeepAliveHandler(menu, setMenu, link, false);
    setPreviousLink(prevLink, setPrevLink, currentPath);
    setActiveTab(menu, setMenu, link);
    navigate(link);
  };

  const closeTabHandler = (link) => {
    // setKeepAliveHandler(menu, setMenu, link, true);
    // console.log("!!CLOSE CLICK");
    // console.log(prevLink);
    if (openMenu.length > 0) {
      const firstOpen = openMenu[0].link;
      setClosedTabs(menu, setMenu, link);
      setActiveTab(menu, setMenu, prevLink);
      navigate(firstOpen);
    }
  };

  return (
    <>
      <div className={style.body}>
        {openMenu.map((i) => {
          let tabStyle = style.tab;
          let btnStyle = style.closeButtonStyle;
          if (i.active) {
            tabStyle = style.tabActive;
            btnStyle = style.closeButtonStyleActive;
          }

          return (
            <div className={style.tabContainer} key={i.id}>
              <div
                className={tabStyle}
                onClick={() => {
                  if (!i.active) {
                    clickTabHandler(i.link);
                  }
                }}
              >
                <span className={style.tabText}>{i.text}</span>
              </div>
              <div className={style.closeButton}>
                <button
                  className={btnStyle}
                  onClick={() => {
                    closeTabHandler(i.link);
                  }}
                >
                  x
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tabs;
