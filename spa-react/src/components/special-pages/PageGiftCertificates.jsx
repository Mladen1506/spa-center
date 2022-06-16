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

  useEffect(() => {
    window.open('https://azuredream.boomtime.com/lgift', '_blank'); // new tab
    // window.location.href = 'https://azuredream.boomtime.com/lgift'; // same tab
  });


  const parallaxImage1 = imagesFolderUrl('bg2.jpeg');

  return (
    <>
      <Page>
        <PageContent>

          {/* <h3>Gift Certificates</h3> */}

          <div className="giftcard-img">
            <a target="_blank" rel="noreferrer" href="https://azuredream.boomtime.com/lgift"><img src={imagesFolderUrl('pages/gift-card.png')} alt="buy gift certificate" /></a>
          </div>

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