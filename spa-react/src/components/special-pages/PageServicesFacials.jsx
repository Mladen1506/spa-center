import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageAddOn from "../pages/PageAddOn";
import PageAzureDreamDeluxe from "../pages/PageAzureDreamDeluxe";
import PageBasicBotanical from "../pages/PageBasicBotanical";
import PageDermaplaning from "../pages/PageDermaplaning";
import PageDreamSkin from "../pages/PageDreamSkin";
import PageMagicFix from "../pages/PageMagicFix";
import PageMicroDermabrasion from "../pages/PageMicroDermabrasion";
import PagePamperYourself from "../pages/PagePamperYourself";
import PageSkinceuticals from "../pages/PageSkinceuticals";
import WidgetExpandable from "../WidgetExpandable";
import PageServicesHydrafacial from "./PageServicesHydrafacial";


const PageServicesFacials = (props) => {
  const {expandedId, _expandSingle} = useExpandSingle();

  return (
    <Page>
      <PageContent>

        {/* <h3>facials</h3> */}

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'BASIC_BOTANICAL'} expandableLevel={2} >
          <PageBasicBotanical />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'SPECIALTY_DREAM_SKIN'} expandableLevel={2} >
          <PageDreamSkin />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'PREMIUM_PAMPER'} expandableLevel={2}>
          <PagePamperYourself />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MAGIC_FIX'} expandableLevel={2}>
          <PageMagicFix />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'AZURE_DREAM'} expandableLevel={2}>
          <PageAzureDreamDeluxe />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MICRO_DERMABRASION'} expandableLevel={2}>
          <PageMicroDermabrasion />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'DERMAPLANING'} expandableLevel={2}>
          <PageDermaplaning />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'HYDRAFACIALS'} expandableLevel={2}>
          <PageServicesHydrafacial />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'SKINCEUTICAL'} expandableLevel={2}>
          <PageSkinceuticals />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'ADD_ON'} expandableLevel={2}>
          <PageAddOn />
        </WidgetExpandable>


      </PageContent>
    </Page>
  );
};

export default PageServicesFacials;