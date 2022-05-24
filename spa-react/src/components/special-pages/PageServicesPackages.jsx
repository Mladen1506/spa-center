import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageFacialPackage from "../pages/PageFacialPackage";
import PageLaserPackages from "../pages/PageLaserPackages";
import PageMassagePackage from "../pages/PageMassagePackage";
import PageSpaComboPack from "../pages/PageSpaComboPack";
import WidgetExpandable from "../WidgetExpandable";
import PageServicesPackagesHydrafacial from "./PageServicesPackagesHydrafacial";


const PageServicesPackages = (props) => {
  const { expandedId, _expandSingle } = useExpandSingle();

  return (
    <Page>
      <PageContent>

        {/* <h3>facials</h3> */}

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'SPA_COMBO_PACKAGES'} expandableLevel={2} >
          <PageSpaComboPack />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'FACIAL_PACKAGES'} expandableLevel={2} >
          {/* TODO: OVDE MOZDA IDE HYDRAFACIALS_MENU */}
          {/*<PageFacialPackage />*/}
          <PageServicesPackagesHydrafacial />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MASSAGE_PACKAGES'} expandableLevel={2}>
          <PageMassagePackage />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'LASER_PACKAGES'} expandableLevel={2}>
          <PageLaserPackages />
        </WidgetExpandable>

      </PageContent>
    </Page>
  );
};

export default PageServicesPackages;