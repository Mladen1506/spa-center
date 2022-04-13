import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageBasicBotanical from "../pages/PageBasicBotanical";
import PageDreamSkin from "../pages/PageDreamSkin";
import PageMicroDermabrasion from "../pages/PageMicroDermabrasion";
import PagePamperYourself from "../pages/PagePamperYourself";
import WidgetExpandable from "../WidgetExpandable";


const PageServicesFacials = (props) => {
  const {expandedId, _expandSingle} = useExpandSingle();

  return (
    <Page>
      <PageContent>

        <h3>facials</h3>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'BASIC_BOTANICAL'} expandableLevel={2} >
          <PageBasicBotanical />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'SPECIALTY_DREAM_SKIN'} expandableLevel={2} >
          <PageDreamSkin />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'PREMIUM_PAMPER'} expandableLevel={2}>
          <PagePamperYourself />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MICRO_DERMABRASION'} expandableLevel={2}>
          <PageMicroDermabrasion />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MAGIC_FIX'} expandableLevel={2}>

        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'SKINCEUTICAL'} expandableLevel={2}>

        </WidgetExpandable>


      </PageContent>
    </Page>
  );
};

export default PageServicesFacials;