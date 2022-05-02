import { useEffect } from "react";
import { useState } from "react";
import { Parallax } from "react-parallax";
import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import ImageCover2 from "../ImageCover2";
import Page from "../Page";
import PageContent from "../PageContent";
// import FormGiftCard from "../FormGiftCard";


const PageGiftCertificates = (props) => {

  const parallaxImage1 = imagesFolderUrl('spa-big4.jpg');

  return (
    <>
      {/* <section className="image-large">
        <ImageCover2 src={parallaxImage1} />
      </section> */}
      <Page>
        <PageContent>

          <h3>Gift Certificates</h3>

          <a target="_blank" rel="noreferrer" href="https://azuredream.boomtime.com/lgift"><img  src={imagesFolderUrl('pages/gift-cert-button.png')} alt="buy gift certificate" /></a>

        </PageContent>
      </Page>
      <div className="container contact-and-map-group">
        <div className="row">
          <div className="col-12 col-lg-6">

          </div>
        </div>
      </div>

      <div></div>

    </>
  );
};

export default PageGiftCertificates;