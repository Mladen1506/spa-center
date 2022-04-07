import { useState } from "react";
import Btn from "./Btn";

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
        <section>
          <div id="paralax-images222">
            <div className="image-container">
              <img className="ic" src="/static/img/test.webp" />
            </div>
          </div>
          {/*
          <div className="paralax-item">
            <div className="has-main-image">
              <div className="title-desc-image">
                <img className="pi" src="/static/img/test.webp" />
              </div>
            </div>
          </div>*/}
        </section>

        <section>
          <div className="inner">
            <div className="grid-container">
              <div className="grid-item"><img className="grid-img" src="/static/img/lejla.jpeg" /></div>
              <div className="grid-item"><img className="grid-img" src="/static/img/lejla.jpeg" /></div>
              <div className="grid-item"><img className="grid-img" src="/static/img/lejla.jpeg" /></div>
              <div className="grid-item"><img className="grid-img" src="/static/img/lejla.jpeg" /></div>
            </div>

            <div className="container222">
              <div className="row">
                <div className="col-12 col-sm-3 col-md-4 col-lg-3"><img className="grid-img" src="/static/img/lejla.jpeg" /></div>
                <div className="col-12 col-sm-3 col-md-4 col-lg-3"><img className="grid-img" src="/static/img/lejla.jpeg" /></div>
                <div className="col-12 col-sm-3 col-md-4 col-lg-3"><img className="grid-img" src="/static/img/lejla.jpeg" /></div>
                <div className="col-12 col-sm-3 col-md-4 col-lg-3"><img className="grid-img" src="/static/img/lejla.jpeg" /></div>
              </div>
            </div>

            <Btn />

            <div className="container222">
              <div className="row">
                <div className="col-12 col-md-6">
                  <h1>Creative excellence and unparalleled hospitality are the driving forces behind the Muse experience.</h1>
                </div>
                <div className="col-12 col-sm-6">
                  <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                </div>
              </div>
            </div>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </section>

        <section>
          <div id="paralax-images222">
            <div className="image-container">
              <img className="ic" src="/static/img/test.webp" />
            </div>
          </div>
          {/*
          <div className="paralax-item">
            <div className="has-main-image">
              <div className="title-desc-image">
                <img className="pi" src="/static/img/test.webp" />
              </div>
            </div>
          </div>
          */}
        </section>

        <section>
          <div className="inner">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </section>

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
        <div className="inner">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </footer>
    </div>
  );
};

export default Layout;