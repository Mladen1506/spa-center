import { Parallax, Background } from "react-parallax";
import { imagesFolderUrl } from "../../utils/url-lib";
import Btn from "../Btn";

const PageHome = (props) => {


  const image4 =
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

  const parallaxImage1 = imagesFolderUrl('spa-big1.jpg');
  const parallaxImage2 = imagesFolderUrl("spa-background.jpg");
  const parallaxImage3 = imagesFolderUrl("test.webp");


  return (
    <>
      <section>
        <Parallax bgImage={parallaxImage1} strength={250}>
          <div style={{ height: 500 }}>
            <div>HTML inside the parallax</div>
          </div>
        </Parallax>
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
        <Parallax bgImage={parallaxImage2} strength={250}>
          <div style={{ height: 500 }}>
            <div>HTML inside the parallax</div>
          </div>
        </Parallax>
      </section>

      <section>
        <div className="inner">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </section>

      <section>
        <Parallax bgImage={parallaxImage3} strength={250}>
          <div style={{ height: 500 }}>
            <div>HTML inside the parallax</div>
          </div>
        </Parallax>
      </section>

      <section>
        <div className="inner">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </section>

      <section></section>

    </>
  );
};

export default PageHome;