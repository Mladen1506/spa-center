import { Parallax, Background } from "react-parallax";
import { imagesFolderUrl } from "../../utils/url-lib";
import Btn from "../Btn";
import Image from "../Image";

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
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="teaser">
                  <div className="teaser-body">
                    <Image left small src={imagesFolderUrl('face.jpeg')} />
                    Sample our delicious menu of organic <a href="/facials/">facials</a> and skin care treatments to reveal your sumptuous skin. And, for specific skin care goals, we offer a range of medi-skin care treatments.
                  </div>
                  <Btn>MORE...</Btn>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="teaser">
                  <div className="teaser-body">
                    <Image left small src={imagesFolderUrl('daisy-150x150.jpeg')} />
                    Enjoy the feeling of serenity as the stress dissipates from your body and mind. <a href="https://azuredreamspa.com/massage-2/">Massages</a>, <a href="https://azuredreamspa.com/cellulite-body-wrap/">body wraps</a>, and our decadent <a href="https://azuredreamspa.com/spa-combo-packages/">spa packages</a> will leave you relaxed and rejuvenated.
                  </div>
                  <Btn>MORE...</Btn>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="teaser">
                  <div className="teaser-body">
                    <Image left small src={imagesFolderUrl('escape1-150x150.jpeg')} />
                    The newest technology has made <a href="https://azuredreamspa.com/electrolysis/">electrolysis </a>and <a href="https://azuredreamspa.com/laser/">laser hair removal</a> extremely effective for all skin tones. Our certified consultants will tailor your perfect treatment plan. Enjoy the pleasure and convenience of soft, smooth skin.
                  </div>
                  <Btn>MORE...</Btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="inner">
          <div className="container">
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