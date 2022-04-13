import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionDrawerToggle, actionRouteSet } from "../redux/actions";
import Btn from "./Btn";
import Icon from "./Icon";
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
          <div className="social">
            <div><Icon fa="fa fa-facebook"/></div>
            <div><Icon fa="fa fa-instagram"/></div>
            <div><Icon fa="fa fa-twitter"/></div>
          </div>
          <div className="columns">
            <div className="col">
              <h6>Location</h6>
              Azure Dream Day Spa<br/>
              2420 Wilson Blvd, Ste. 100<br />
              Arlington, VA 22201<br />
              Phone: 703-243-4343</div>
          <div className="col">
              <h6>Hours</h6>
            Hours...</div>
          </div>
          <div className="spacer"></div>
          <div className="copyright">Copyright © 2020 All Rights Reserved.</div>
          <div className="copyright">Privacy Statement | Terms of Use</div>
        </div>
      </footer>

      <nav className={drawerOpened ? "drawer opened" : "drawer"}>
        <MenuOptionList />
      </nav>
    </div>
  );
};

export default Layout;