import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import ImageCover2 from "../ImageCover2";
import Page from "../Page";
import PageContent from "../PageContent";

const PageProducts = () => {
  const parallaxImage2 = imagesFolderUrl("product-bg.jpeg");

  return (
    <>
      <section className="image-large image-large-products">
        <ImageCover2 src={parallaxImage2} />
      </section>
      <div className="services-bg products-bg">
        <div className="page-inner page-inner-special">
          <div className="services-3-columns">
            <div className="left-flex"></div>
            <div className="page-content-wrapper page-content-wrapper-products">
              <PageContent>
                <div className="page-detectable detect-page-products"></div>
                <div className="products-wrapper">
                  <p>Eminence</p>
                  <p>Skinceuticals</p>
                  <p>Skin Better Science</p>
                  <p>Latisse</p>
                  <p>Aveda</p>
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

export default PageProducts;