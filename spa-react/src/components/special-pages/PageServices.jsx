import { useState } from "react";
import { Parallax } from "react-parallax";
import { useExpandSingle } from "../../hooks/use-expand-single";
import { imagesFolderUrl } from "../../utils/url-lib";
import ImageCover2 from "../ImageCover2";
import Page from "../Page";
import PageContent from "../PageContent";
import PageComboTreats from "../pages/PageComboTreats";
import PageHairBar from "../pages/PageHairBar";
import PageNails from "../pages/PageNails";
import PageOccasional from "../pages/PageOccasional";
import WidgetExpandable from "../WidgetExpandable";
import PageServicesBrowAndLash from "./PageServicesBrowAndLash";
import PageServicesFacials from "./PageServicesFacials";
import PageServicesHairRemoval from "./PageServicesHairRemoval";
import PageServicesMassage from "./PageServicesMassage";
import PageServicesBody from "./PageServicesMassageBody";
import PageServicesMediSpa from "./PageServicesMediSpa";
import PageServicesPermanentMakeup from "./PageServicesPermanentMakeup";

// const parallaxImage2 = imagesFolderUrl("massage9.png");
// const parallaxImage2 = imagesFolderUrl("pink-orchid-bg.jpg");
const parallaxImage2 = imagesFolderUrl("spa-wallpapers6.jpg");
const PageServices = (props) => {
  const { expandedId, _expandSingle } = useExpandSingle();

  return (
    <>
      {/* <ImageCover src={imagesFolderUrl("services.jpeg")} alt="Spa services" /> */}
      <section className="image-large image-large-services">
        <ImageCover2 src={parallaxImage2} />
      </section>
      <div className="services-bg services-bg-original">
        <div className="page-inner page-inner-special">
          <div className="services-3-columns">
            <div className="left-flex"></div>
            <div className="services-widgets-wrapper">
              <div className="page-detectable detect-page-services"></div>

              {/* <h1>Services</h1> */}

              <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'FACIALS'} htmlId="facials" >
                <PageServicesFacials />
              </WidgetExpandable>

              <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MEDI_SPA'} htmlId="medi-spa" >
                <PageServicesMediSpa />
              </WidgetExpandable>

              <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'HAIR_REMOVAL'} htmlId="hair-removal" >
                <PageServicesHairRemoval />
              </WidgetExpandable>

              <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'PERMANENT_MAKEUP'} htmlId="permanent-makeup">
                <PageServicesPermanentMakeup />
              </WidgetExpandable>

              <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MASSAGE'} htmlId="massage" >
                <PageServicesMassage />
              </WidgetExpandable>

              <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'BODY'} htmlId="body" >
                <PageServicesBody />
              </WidgetExpandable>


              <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'BROW_LASH_BAR'} htmlId="brow-and-lash-bar" >
                <PageServicesBrowAndLash />
              </WidgetExpandable>

              <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'NAILS'} htmlId="nail-bar" >
                <PageNails />
              </WidgetExpandable>

              <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'HAIR'} htmlId="hair-bar" >
                <PageHairBar />
              </WidgetExpandable>

              <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'PACKAGES'} htmlId="combo-treats" >
                <PageComboTreats />
              </WidgetExpandable>

              <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'OCCASIONAL'} htmlId="occasional-offers" >
                <PageOccasional />
              </WidgetExpandable>

            </div>
            <div className="right-flex"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageServices;