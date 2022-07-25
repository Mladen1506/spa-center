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

  // const parallaxImage1 = imagesFolderUrl('spa-wallpapers-contact.jpg');
  const parallaxImage1 = imagesFolderUrl('pink-orchid1.jpg');
  // const parallaxImage2 = imagesFolderUrl("spa-wallpapers-contact.jpg");
  const parallaxImage2 = imagesFolderUrl("bg_pic.jpeg");
  // const parallaxImage3 = imagesFolderUrl("spa-test1.jpeg");

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
          <div className="logo-big">
            <div className="logo-bg-img"></div>
          </div>
        </section>


        <section className="section-welcome">
          <div className="inner">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="teaser teaser-welcome">
                    <div className="teaser-body">

                      <p>Welcome to Azure Dream, where we connect your inner peace with your body, mind, and spirit. We invite you to visit us and indulge yourself at our luxurious yet cozy day spa – enjoy pampering, comfort, and a sense of belonging.</p>
                      <p>Our professional team is dedicated to each and every one of our clients. We are committed to providing excellent service and a superlative customer experience. Our technicians are highly-trained professionals who offer the best in all med spa services, injectables, laser hair removal, electrolysis, skin care, massage and body treatments, waxing, threading, and lash and brow treatments. Our equipment is new, state-of-the-art technology, delivering results that will satisfy the most discerning clients.</p>
                      <p>Azure Dream is now located in our brand new luxurious building, in Northern Arlington, VA, within walking distance from the Ballston Metro.</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-teasers">
          <div className="inner">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-3">
                  <div className="teaser">
                    <div className="teaser-body">
                      <h4>Magic Fix</h4>
                      <Image left src={imagesFolderUrl('magic-fix.jpeg')} />
                      A treatment designed for serious skin conditions, Magic Fix™ includes microdermabrasion and a selection of an Eminence organic peel based on your needs.
                    </div>
                    <Btn href="/services#magic-fix" handleClick={(e) => { e.preventDefault(); _handleClickRoute('MAGIC_FIX') }}>MORE...</Btn>
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="teaser">
                    <div className="teaser-body">
                      <h4>Relaxing Escape</h4>
                      <Image left small src={imagesFolderUrl('hair-removal-small.jpg')} />
                      Enjoy the feeling of serenity as the stress dissipates from your body and mind. Massages, body wraps, and our decadent spa packages will leave you relaxed and rejuvenated.
                    </div>
                    <Btn href="/services#massage" handleClick={(e) => { e.preventDefault(); _handleClickRoute('MASSAGE_BODY') }}>MORE...</Btn>
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="teaser">
                    <div className="teaser-body">
                      <h4>Hair Removal</h4>
                      <Image left small src={imagesFolderUrl('laser1.jpeg')} />
                      The newest technology has made electrolysis and laser hair removal extremely effective for all skin tones. Our certified consultants will tailor your perfect treatment plan. Enjoy the pleasure and convenience of soft, smooth skin.
                    </div>
                    <Btn href="/services#hair-removal" handleClick={(e) => { e.preventDefault(); _handleClickRoute('HAIR_REMOVAL') }}>MORE...</Btn>
                  </div>
                </div>

                <div className="col-12 col-md-3">
                  <div className="teaser">
                    <div className="teaser-body">
                      <h4>Morpheus 8</h4>
                      <Image left small src={imagesFolderUrl('morpheus8.png')} />
                      <b>Morpheus 8 face</b>
                      <p>Deep fractional, radiofrequency treatment for skin, tissue and collagen remodeling.</p>
                      <b>Morpheus 8 body</b>
                      <p>Improve skin appearance, remodel fat, treat skin irregularities and build collagen.</p>
                    </div>
                    <Btn href="/services#morpheus-8" handleClick={(e) => { e.preventDefault(); _handleClickRoute('MORPHEUS8') }}>MORE...</Btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* <section className="section-cards">
          <div className="inner">
            <div className="container">
              <div className="row">

                <div className="col-12 col-md-4">
                  <div className="card">
                    <div className="card-header">
                      <a href="http://mailchi.mp/azuredreamspa/website-special-sy2m9gh2et-363949" target="_blank" className="fl-icon-text-link fl-icon-text-wrap" rel="noopener nofollow"><p>Referral Rewards</p></a>
                    </div>
                    <div className="card-body">
                      <Image left small src={imagesFolderUrl('referal.jpg')} />
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
                      <Image left small src={imagesFolderUrl('gift-cards.jpg')} />
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
                      <Image left small src={imagesFolderUrl('special.png')} />
                      Treat yourself or your loved ones to some of our wonderful services!
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section> */}


        <section className="image-large">
          <ImageCover2 src={parallaxImage2} />
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
                      <Image left small src={imagesFolderUrl('referal.jpg')} />
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
                      <Image left small src={imagesFolderUrl('gift-cards.jpg')} />
                      Give the perfect gift for that special someone!
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="card">
                    <div className="card-header">
                      <a href="#" target="_blank" className="fl-icon-text-link fl-icon-text-wrap" rel="noopener nofollow" id="yui_3_18_1_1_1650133856537_23213"><p>Our New Special</p></a>
                    </div>
                    <div className="card-body">
                      <Image left small src={imagesFolderUrl('special.png')} />
                      Treat yourself or your loved ones to some of our wonderful services!
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* <section className="section-teasers">
          <div className="inner">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-3">
                  <div className="teaser">
                    <div className="teaser-body">
                      <h4>Dream Skin</h4>
                      <Image left small src={imagesFolderUrl('hair-removal.jpeg')} />
                      Sample our delicious menu of organic <a href="/facials/">facials</a> and skin care treatments to reveal your sumptuous skin. And, for specific skin care goals, we offer a range of medi-skin care treatments.
                    </div>
                    <Btn href="/services" handleClick={(e) => { e.preventDefault(); _handleClickRoute('SERVICES') }}>MORE...</Btn>
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="teaser">
                    <div className="teaser-body">
                      <h4>Relaxing Escape</h4>
                      <Image left small src={imagesFolderUrl('hair-removal-small.jpg')} />
                      Enjoy the feeling of serenity as the stress dissipates from your body and mind. <a href="/massage-2/">Massages</a>, <a href="/cellulite-body-wrap/">body wraps</a>, and our decadent <a href="/spa-combo-packages/">spa packages</a> will leave you relaxed and rejuvenated.
                    </div>
                    <Btn href="/services" handleClick={(e) => { e.preventDefault(); _handleClickRoute('SERVICES') }}>MORE...</Btn>
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="teaser">
                    <div className="teaser-body">
                      <h4>Hair Removal</h4>
                      <Image left small src={imagesFolderUrl('hair-removal-legs.jpeg')} />
                      The newest technology has made <a href="/electrolysis/">electrolysis </a>and <a href="/laser/">laser hair removal</a> extremely effective for all skin tones. Our certified consultants will tailor your perfect treatment plan. Enjoy the pleasure and convenience of soft, smooth skin.
                    </div>
                    <Btn href="/services" handleClick={(e) => { e.preventDefault(); _handleClickRoute('SERVICES') }}>MORE...</Btn>
                  </div>
                </div>

                <div className="col-12 col-md-3">
                  <div className="teaser">
                    <div className="teaser-body">
                      <h4>Hair Removal</h4>
                      <Image left small src={imagesFolderUrl('hair-removal-legs.jpeg')} />
                      The newest technology has made <a href="/electrolysis/">electrolysis </a>and <a href="/laser/">laser hair removal</a> extremely effective for all skin tones. Our certified consultants will tailor your perfect treatment plan. Enjoy the pleasure and convenience of soft, smooth skin.
                    </div>
                    <Btn href="/services" handleClick={(e) => { e.preventDefault(); _handleClickRoute('SERVICES') }}>MORE...</Btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default PageHome;