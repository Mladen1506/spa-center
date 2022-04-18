import { useEffect } from "react";
import { useState } from "react";
import { Parallax } from "react-parallax";
import { imagesFolderUrl } from "../../utils/url-lib";
import CoverImage from "../CoverImage";
import Page from "../Page";
import PageContent from "../PageContent";
// import FormGiftCard from "../FormGiftCard";


const PageGiftCertificates = (props) => {

  const parallaxImage1 = imagesFolderUrl('spa-big4.jpg');

  return (
    <>
      <Parallax bgImage={parallaxImage1} strength={250}>
        <div style={{ height: 800 }}>
          <div>HTML inside the parallax</div>
        </div>
      </Parallax>
      <CoverImage src={imagesFolderUrl("cover1.png")} alt="Spa services" />
      <Page>
        <PageContent>

          <h3>Gift Certificates</h3>





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