import { imagesFolderUrl } from "../../utils/url-lib";
import ImageCover2 from "../ImageCover2";
import Page from "../Page";
import PageContent from "../PageContent";


const PageAbout = (props) => {
  const parallaxImage2 = imagesFolderUrl("spa-wallpapers-contact.jpg");
  return (
    <>
      <section className="image-large image-large-services">
        <ImageCover2 src={parallaxImage2} />
      </section>
      <div className="services-bg about-bg">
        <div className="page-inner page-inner-special">
          <div className="services-3-columns">
            <div className="left-flex"></div>
            <div className="page-content-wrapper">
              <PageContent>
                <div className="page-detectable detect-page-is-about"></div>
                <div className="fl-rich-text">
                  <h6>Azure Dream Spa Philosophy</h6>
                  <p>Azure Dream Day Spa was founded by Leila and Arash in 2010, creating a luxurious yet cozy escape to all visiting clients. They carefully hand-picked their staff, ensuring not only the highest professional standards, expertise, and certification, but also warm and caring personalities. Azure offers the latest, state of the art equipment to achieve the best results possible, along with the best skin care products available.</p>
                  <p>Every guest will find a soothing retreat, with discreet, friendly, personal service – and results that will keep them returning. So, step through the door and be greeted by friendly staff and experience the ultimate spa experience, only at Azure.</p>

                  <h6>Testimonials</h6>

                  <div>
                    <iframe id="inlineFrameExample"
                      title="Five Star Ratings"
                      height="600"
                      style={{width:'100%'}}
                      src="https://na0.meevo.com/FiveStarRatingApp/?t=103566&l=106601">
                    </iframe>
                  </div>
                </div>
              </PageContent>
            </div>
            <div className="right-flex"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAbout;