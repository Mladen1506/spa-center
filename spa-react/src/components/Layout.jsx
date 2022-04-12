import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionDrawerToggle, actionRouteSet } from "../redux/actions";
import Btn from "./Btn";
import MenuOptionList from "./MenuOptionList";
import PageRouter from "./PageRouter";


const Layout = (props) => {
  const dispatch = useDispatch();
  const drawerOpened = useSelector(state => state.drawerOpened);

  // const [drawerOpened, setDrawerOpened] = useState(false);

  useEffect(() => {
    if (drawerOpened) {
      //
      document.body.classList.add("drawer-opened"); // js
    } else {
      document.body.classList.remove("drawer-opened"); // js
    }
  }, [drawerOpened]);

  const handleClickHamburger = () => {
    /*
    if (drawerOpened) {
      setDrawerOpened(false);
    } else {
      setDrawerOpened(true);
    }
    */
    dispatch(actionDrawerToggle());
  };

  return (
    <div className="wrapper">
      <header>
        <div className="logo">SPA LOGO</div>
        <div className="flex-1"></div>
        <span className="hamburger" onClick={handleClickHamburger}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </span>
        <nav>
          <MenuOptionList />
        </nav>
        {/*<div className={drawerOpened ? "fix-drawer-push opened" : "fix-drawer-push"}></div>*/}
      </header>

      <div className="page-body">
        <PageRouter />
      </div>

      <div className="mobile-info-bar">
        <div className="item">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <span>CALL</span>
        </div>
        <div className="item">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <span>LOCATION</span>
        </div>
        <div className="item">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
          <span>HOURS</span>
        </div>
      </div>

      <footer>
        <div className="inner">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </footer>

      <nav className={drawerOpened ? "drawer opened" : "drawer"}>
        <MenuOptionList />
      </nav>
    </div>
  );
};

export default Layout;