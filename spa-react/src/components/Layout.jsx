import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionDrawerToggle, actionRouteSet } from "../redux/actions";
import { imagesFolderUrl } from "../utils/url-lib";
import Btn from "./Btn";
import Icon from "./Icon";
import MenuOptionList from "./MenuOptionList";
import PageRouter from "./PageRouter";


const Layout = (props) => {
  const dispatch = useDispatch();
  const drawerOpened = useSelector(state => state.drawerOpened);

  const _handleClickRoute = (route) => {
    dispatch(actionRouteSet(route));
  }

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
        <div className="logo">
          <img src={imagesFolderUrl("image.png")} alt="" />
          <div className="logo-bg-img"></div>
        </div>
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
        <a href="tel:7032434343">
          <div className="item">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span>CALL</span>
          </div>
        </a>
        <a href="/about-us/contact-us/">
          <div className="item" >
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <span>LOCATION</span>
          </div>
        </a>
        <div className="item" onclick="window.react_scroll_to_bottom()">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
          <span>HOURS</span>
        </div>
      </div>

      <footer>
        <div className="inner">
          <div className="social">
            <a target="_blank" rel="noreferrer" href="https://facebook.com"><div><Icon fa="fa fa-facebook" /></div></a>
            <a target="_blank" rel="noreferrer" href="https://instagram.com"><div><Icon fa="fa fa-instagram" /></div></a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com"><div><Icon fa="fa fa-twitter" /></div></a>
          </div>
          <div className="columns">
            <div className="column">
              <h6>Location</h6>
              Azure Dream Day Spa<br />
              901 North Quincy Street<br />
              Arlington, VA 22203<br />
              Phone: 703-243-4343</div>
            <div className="column">
              <h6>Hours</h6>
              Monday	8am - 7pm<br />
              Tuesday	8am - 7pm<br />
              Wednesday	8am - 7pm<br />
              Thursday	8am - 7pm<br />
              Friday	8am - 7pm<br />
              Saturday	8am - 5pm<br />
              Sunday	8am - 5pm</div>
          </div>
          <div className="spacer"></div>
          <div className="copyright">Copyright © 2020 All Rights Reserved.</div>
          <div className="copyright"><a href="/privacy-policy" onClick={(e) => { e.preventDefault(); _handleClickRoute('PRIVACY') }}>Privacy Statement</a> | <a href="/terms-of-use" onClick={(e) => { e.preventDefault(); _handleClickRoute('TERMS') }}>Terms of Use</a></div>
        </div>
      </footer>

      <nav className={drawerOpened ? "drawer opened" : "drawer"}>
        <MenuOptionList />
      </nav>
    </div>
  );
};

export default Layout;