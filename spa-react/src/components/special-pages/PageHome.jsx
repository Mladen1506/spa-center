import { Parallax, Background } from "react-parallax";
import { useDispatch } from "react-redux";
import { actionRouteSet } from "../../redux/actions";
import { imagesFolderUrl } from "../../utils/url-lib";
import Btn from "../Btn";
import Image from "../Image";
import ImageCover2 from "../ImageCover2";

const PageHome = (props) => {
  const dispatch = useDispatch();


  const image4 =
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

  const parallaxImage1 = imagesFolderUrl('spa2.jpeg');
  const parallaxImage2 = imagesFolderUrl("massage6.jpeg");
  const parallaxImage3 = imagesFolderUrl("spa-test1.jpeg");

  const _handleClickRoute = (route) => {
    dispatch(actionRouteSet(route));
  }

  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=" + 38.8810 + ',' + -77.1074;

  const handleClickDirections = (e) => {
    window.open(googleMapsDirectionsUrl, '_blank').focus();
  };

  return (
    <>
      <div className="page-home">
        <section className="image-large">
          <ImageCover2 src={parallaxImage1} />
        </section>


        <section className="section-welcome">
          <div className="inner">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="teaser">
                    <div className="teaser-body">
                      <h4>Welcome</h4>
                      <p>At Azure Dream Spa we connect your inner peace with your body, mind, and spirit.</p>
                      <p>We invite you to visit us at our <a href="https://azuredreamspa.com/About-Us/Contact-Us">location</a> in the heart of Arlington, VA, and indulge yourself at our luxurious yet cozy day spa – enjoy pampering, comfort, and a sense of belonging.</p>
                      <p>We offer a full range of services for a perfect spa experience.<br />
                        <em><a href="https://azuredreamspa.com/About-Us">Read more...</a></em></p>
                    </div>
                    <Btn href="/about" handleClick={(e) => { e.preventDefault(); _handleClickRoute('ABOUT') }}>MORE...</Btn>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="teaser">
                    <div className="teaser-body">
                      <h4>Visit Azure Dream Day Spa</h4>
                      <Image left small src={imagesFolderUrl('maindesk1-237x300.jpg')} />
                      Located on Wilson Blvd., in the heart of Arlington, VA. Our convenient NOVA location is a just minutes from DC and Alexandria -- and less than five minutes walking distance from Courthouse Metro.
                    </div>
                    <Btn newTab href={googleMapsDirectionsUrl}>Directions</Btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="section-cards">
          <div className="inner">
            <div className="container">
              <div className="row">

                <div className="col-12 col-md-4">
                  <div className="card">
                    <div className="card-header">
                      <a href="http://mailchi.mp/azuredreamspa/website-special-sy2m9gh2et-363949" target="_blank" className="fl-icon-text-link fl-icon-text-wrap" rel="noopener nofollow"><p>Referral Rewards</p></a>
                    </div>
                    <div className="card-body">
                      Refer a friend & earn 10% of their first visit to use as credit toward your own future services.
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="card">
                    <div className="card-header">
                      <a href="https://azuredream.boomtime.com/lgift" target="_blank" className="fl-icon-text-link fl-icon-text-wrap" rel="noopener nofollow"><p>Gift Certificates</p></a>
                    </div>
                    <div className="card-body">
                      Give the perfect gift for that special someone!
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="card">
                    <div className="card-header">
                      <a href="https://mailchi.mp/azuredreamspa/spring-special" target="_blank" className="fl-icon-text-link fl-icon-text-wrap" rel="noopener nofollow" id="yui_3_18_1_1_1650133856537_23213"><p>Our New Special</p></a>
                    </div>
                    <div className="card-body">
                      Treat yourself or your loved ones to some of our wonderful services!
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        <section className="image-large">
          <ImageCover2 src={parallaxImage2} />
        </section>


        <section className="section-teasers">
          <div className="inner">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="teaser">
                    <div className="teaser-body">
                      <h4>Dream Skin</h4>
                      <Image left small src={imagesFolderUrl('face.jpeg')} />
                      Sample our delicious menu of organic <a href="/facials/">facials</a> and skin care treatments to reveal your sumptuous skin. And, for specific skin care goals, we offer a range of medi-skin care treatments.
                    </div>
                    <Btn href="/services" handleClick={(e) => { e.preventDefault(); _handleClickRoute('SERVICES') }}>MORE...</Btn>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="teaser">
                    <div className="teaser-body">
                      <h4>Relaxing Escape</h4>
                      <Image left small src={imagesFolderUrl('daisy-150x150.jpeg')} />
                      Enjoy the feeling of serenity as the stress dissipates from your body and mind. <a href="https://azuredreamspa.com/massage-2/">Massages</a>, <a href="https://azuredreamspa.com/cellulite-body-wrap/">body wraps</a>, and our decadent <a href="https://azuredreamspa.com/spa-combo-packages/">spa packages</a> will leave you relaxed and rejuvenated.
                    </div>
                    <Btn href="/services" handleClick={(e) => { e.preventDefault(); _handleClickRoute('SERVICES') }}>MORE...</Btn>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="teaser">
                    <div className="teaser-body">
                      <h4>Hair Removal</h4>
                      <Image left small src={imagesFolderUrl('escape1-150x150.jpeg')} />
                      The newest technology has made <a href="https://azuredreamspa.com/electrolysis/">electrolysis </a>and <a href="https://azuredreamspa.com/laser/">laser hair removal</a> extremely effective for all skin tones. Our certified consultants will tailor your perfect treatment plan. Enjoy the pleasure and convenience of soft, smooth skin.
                    </div>
                    <Btn href="/services" handleClick={(e) => { e.preventDefault(); _handleClickRoute('SERVICES') }}>MORE...</Btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="section-grid-gallery">
          <div className="inner">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-3 col-md-4 col-lg-3"><img className="grid-img" src="/static/img/maindesk1-237x300.jpg" /></div>
                <div className="col-12 col-sm-3 col-md-4 col-lg-3"><img className="grid-img" src="/static/img/maindesk1-237x300.jpg" /></div>
                <div className="col-12 col-sm-3 col-md-4 col-lg-3"><img className="grid-img" src="/static/img/maindesk1-237x300.jpg" /></div>
                <div className="col-12 col-sm-3 col-md-4 col-lg-3"><img className="grid-img" src="/static/img/maindesk1-237x300.jpg" /></div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <h2>Creative excellence and unparalleled hospitality are the driving forces behind the Muse experience.</h2>
                </div>
                <div className="col-12 col-sm-6">
                  <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Btn href="/gallery" handleClick={(e) => { e.preventDefault(); _handleClickRoute('GALLERY') }}>View more photos</Btn>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* 

        <section>
          <Parallax bgImage={parallaxImage3} strength={250}>
            <div style={{ height: 700 }}>
              <div>HTML inside the parallax</div>
            </div>
          </Parallax>
        </section> */}

        {/* <section>
          <div className="inner">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </section> */}


      </div>
    </>
  );
};

export default PageHome;