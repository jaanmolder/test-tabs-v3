export function setActiveTab(menu, setMenu, link) {
  try {
    const newArr = [...menu];
    const index = newArr.findIndex((i) => i.link === link);

    for (let i = 0; i < newArr.length; i++) {
      newArr[i].active = false;
    }

    newArr[index].active = true;
    setMenu(newArr);
  } catch (error) {
    console.log(error);
  }
}

export function setOpenTabs(menu, setMenu, pathname) {
  try {
    const newArr = [...menu];
    const index = newArr.findIndex((i) => i.link === pathname);

    if (index !== -1) {
      newArr[index].open = true;
      setMenu(newArr);
      setActiveTab(menu, setMenu, pathname);
    }
  } catch (error) {
    console.log(error);
  }
}

export function setClosedTabs(menu, setMenu, pathname) {
  try {
    const newArr = [...menu];
    const index = newArr.findIndex((i) => i.link === pathname);
    newArr[index].open = false;
    setMenu(newArr);
    // console.log("setClosedTabs");
    // console.log(pathname);
    // setActiveTab(menu, setMenu, pathname);
  } catch (error) {
    console.log(error);
  }
}

export function setKeepAliveHandler(menu, setMenu, pathname, bool) {
  try {
    const newArr = [...menu];
    const index = newArr.findIndex((i) => i.link === pathname);
    // console.log("dis");
    if (index !== -1) {
      // console.log(newArr[index].keepAliveDisabled);
      newArr[index].keepAliveDisabled = bool;
      setMenu(newArr);
    }
  } catch (error) {
    console.log(error);
  }
}
