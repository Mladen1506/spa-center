import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import ImageCover2 from "../ImageCover2";
import Page from "../Page";
import PageContent from "../PageContent";

const PageProducts = () => {
  const parallaxImage2 = imagesFolderUrl("product-bg.jpeg");

  return (
    <>
      <section className="image-large image-large-services">
        <ImageCover2 src={parallaxImage2} />
      </section>
      <div className="services-bg products-bg">
        <div className="page-inner page-inner-special">
          <div className="services-3-columns">
            <div className="left-flex"></div>
            <div className="page-content-wrapper">
              <PageContent>
                <div className="products-wrapper">
                  <p>Eminence</p>
                  <p>Skin Ceuticals</p>
                  <p>Skin Better Science</p>
                  <p>Latisse</p>
                  <p>Grande Lash</p>
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