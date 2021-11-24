import style from "./main-output.module.css";
import ShowIf from "./show-if";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setOpenTabs } from "./func/tab-func";

const MainOutput = ({ menu, setMenu }) => {
  const location = useLocation();
  const ifOpenTabs = menu.filter((i) => i.open === true);
  const ifActTabs = menu.filter((i) => i.active === true);

  useEffect(() => {
    setOpenTabs(menu, setMenu, location.pathname);
  }, [location.pathname]);

  return (
    <div className={style.body}>
      <ShowIf condition={ifOpenTabs.length > 0 && ifActTabs.length === 1}>
        <Outlet />
      </ShowIf>
    </div>
  );
};

export default MainOutput;
