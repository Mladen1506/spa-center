import { useEffect } from "react";
import { useState } from "react";
import { imagesFolderUrl } from "../../utils/url-lib";
import ContactForm from "../ContactForm";
import CoverImage from "../CoverImage";
import Page from "../Page";
import PageContent from "../PageContent";
import UniversalMap from "../UniversalMap";


const PageContact = (props) => {

  // geo:38.88090,-77.10836?z=19
  // const positionLatLongOfSpaArlingtonQuincy = [38.8765507, -77.1141811];
  // const coordinatesOfSpaArlingtonQuincy = [38.8765507, -77.1141811];
  // 38.8810/-77.1074
  const coordinatesOfSpaArlingtonQuincy = [38.8810, -77.1074];
  // "https://www.google.com/maps/search/?api=1&query=" + ll[0] + ',' + ll[1];
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=" + 38.8810 + ',' + -77.1074;
  // <a target="_blank" href={googleMapsUrl}>Open on Google Maps</a>


  return (
    <>
      <CoverImage src={imagesFolderUrl("cover1.png")} alt="Spa services" />
      <Page>
        <PageContent>

          <h3>Contact</h3>





        </PageContent>
      </Page>
      <div className="container contact-and-map-group">
        <div className="row">
          <div className="col-12 col-lg-6">
            <UniversalMap ll={coordinatesOfSpaArlingtonQuincy} zoom={13} />
          <a className="link-open-map" target="_blank" rel="noreferrer" href={googleMapsUrl}>Open on Google Maps</a>
          </div>
          <div className="col-12 col-lg-6">
            <ContactForm />
          </div>
        </div>
      </div>

      <div></div>

    </>
  );
};

export default PageContact;