import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionRouteSet } from "../redux/actions";
import Btn from "./Btn";
import MenuOption from "./MenuOption";
import PageRouter from "./PageRouter";

const Layout = (props) => {
  const dispatch = useDispatch();
  const [drawerOpened, setDrawerOpened] = useState(false);

  const handleClickHamburger = () => {
    if (drawerOpened) {
      setDrawerOpened(false);
    } else {
      setDrawerOpened(true);
    }
  };

  const _handleClickOption = (route)=>{
    dispatch(actionRouteSet(route));
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
          <MenuOption title={'Home'} handleClick={(e)=>{ _handleClickOption('HOME')}} />
          <MenuOption title={'Aqua'} handleClick={(e) => { _handleClickOption('AQUA_GOLD') }} />
          <MenuOption title={'Nestooooo'} />
          <MenuOption title={'Nesto'} />
          <MenuOption title={'Nestooo'} />
          <MenuOption title={'Nesto'} />
        </nav>
        <div className={drawerOpened ? "fix-drawer-push opened" : "fix-drawer-push"}></div>
      </header>

      <nav className={drawerOpened ? "drawer opened" : "drawer"}>
        <MenuOption title={'Home'} handleClick={(e) => { _handleClickOption('HOME') }} />
        <MenuOption title={'Aqua'} handleClick={(e) => { _handleClickOption('AQUA_GOLD') }} />
        <MenuOption title={'Nestooooo'} />
        <MenuOption title={'Nesto'} />
        <MenuOption title={'Nestooo'} />
        <MenuOption title={'Nesto'} />
      </nav>

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
    </div>
  );
};

export default Layout;