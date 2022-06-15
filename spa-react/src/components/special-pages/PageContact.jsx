import { useEffect } from "react";
import { useState } from "react";
import { Parallax } from "react-parallax";
import { imagesFolderUrl } from "../../utils/url-lib";
import FormContact from "../FormContact";
import Page from "../Page";
import PageContent from "../PageContent";
import UniversalMap from "../UniversalMap";
import ImageCover2 from "../ImageCover2";


const PageContact = (props) => {

  // geo:38.88090,-77.10836?z=19
  // const positionLatLongOfSpaArlingtonQuincy = [38.8765507, -77.1141811];
  // const coordinatesOfSpaArlingtonQuincy = [38.8765507, -77.1141811];
  // 38.8810/-77.1074
  const coordinatesOfSpaArlingtonQuincy = [38.8810, -77.1074];
  // "https://www.google.com/maps/search/?api=1&query=" + ll[0] + ',' + ll[1];
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=" + 38.8810 + ',' + -77.1074;
  // <a target="_blank" href={googleMapsUrl}>Open on Google Maps</a>

  // https://www.google.com/maps/dir/?api=1&destination=38.881,-77.1074
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=" + 38.8810 + ',' + -77.1074;

  const parallaxImage1 = imagesFolderUrl('background_2.jpeg');

  return (
    <>
      <Page>
        <PageContent>
          <div className="container contact-and-map-group">
            <div className="row">
              <div className="col-12 col-lg-6">
                <UniversalMap ll={coordinatesOfSpaArlingtonQuincy} zoom={13} />
                <a className="link-open-map" target="_blank" rel="noreferrer" href={googleMapsUrl}>Open on Google Maps</a>
                <a className="link-open-map" target="_blank" rel="noreferrer" href={googleMapsDirectionsUrl}>Show directions on Google Maps</a>
              </div>
              <div className="col-12 col-lg-6">
                <FormContact />
              </div>
            </div>
          </div>
        </PageContent>
      </Page>
    </>
  );
};

export default PageContact;