import { useState } from "react";

const Layout = (props) => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  const handleClickHamburger = () => {
    if (drawerOpened) {
      setDrawerOpened(false);
    } else {
      setDrawerOpened(true);
    }
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
          <div className="option">Nesto</div>
          <div className="option">Nes</div>
          <div className="option">Nestooooo</div>
          <div className="option">Neto</div>
          <div className="option">Nestooo</div>
          <div className="option">Nesto</div>
        </nav>
        <div className={drawerOpened ? "fix-drawer-push opened" : "fix-drawer-push"}></div>
      </header>

      <nav className={drawerOpened ? "drawer opened" : "drawer"}>
        <div className="option">Nesto</div>
        <div className="option">Nes</div>
        <div className="option">Nestooooo</div>
        <div className="option">Neto</div>
        <div className="option">Nestooo</div>
        <div className="option">Nesto</div>
      </nav>

      <div className="page-body">
        <section></section>
        <section></section>
        <section></section>
        <section></section>
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
        footer
      </footer>
    </div>
  );
};

export default Layout;