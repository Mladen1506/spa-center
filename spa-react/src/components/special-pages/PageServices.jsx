import { useState } from "react";
import { Parallax } from "react-parallax";
import { useExpandSingle } from "../../hooks/use-expand-single";
import { imagesFolderUrl } from "../../utils/url-lib";
import ImageCover2 from "../ImageCover2";
import Page from "../Page";
import PageContent from "../PageContent";
import WidgetExpandable from "../WidgetExpandable";
import PageServicesBrowAndLash from "./PageServicesBrowAndLash";
import PageServicesFacials from "./PageServicesFacials";
import PageServicesHairRemoval from "./PageServicesHairRemoval";
import PageServicesMassage from "./PageServicesMassage";
import PageServicesBody from "./PageServicesMassageBody";
import PageServicesMediSpaTreatment from "./PageServicesMediSpaTreatment";
import PageServicesPackages from "./PageServicesPackages";
import PageServicesPermanentMakeup from "./PageServicesPermanentMakeup";

const parallaxImage2 = imagesFolderUrl("bg2.jpeg");
const PageServices = (props) => {
  const { expandedId, _expandSingle } = useExpandSingle();

  return (
    <>
      {/* <ImageCover src={imagesFolderUrl("services.jpeg")} alt="Spa services" /> */}
      <section className="image-large">
        <ImageCover2 src={parallaxImage2} />
      </section>
      <Page>
        <div className="">

          {/* <h1>Services</h1> */}

          <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'FACIALS'} >
            <PageServicesFacials />
          </WidgetExpandable>

          <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MASSAGE'} >
            <PageServicesMassage />
          </WidgetExpandable>

          <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'BODY'} >
            <PageServicesBody />
          </WidgetExpandable>


          <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'BROW_LASH_BAR'} >
            <PageServicesBrowAndLash />
          </WidgetExpandable>

          <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MEDI_SPA'} >
            <PageServicesMediSpaTreatment />
          </WidgetExpandable>

          <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'HAIR_REMOVAL'} >
            <PageServicesHairRemoval />
          </WidgetExpandable>

          <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'PERMANENT_MAKEUP'} >
            <PageServicesPermanentMakeup />
          </WidgetExpandable>

          <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'PACKAGES'} >
            <PageServicesPackages />
          </WidgetExpandable>

        </div>
      </Page>
    </>
  );
};

export default PageServices;