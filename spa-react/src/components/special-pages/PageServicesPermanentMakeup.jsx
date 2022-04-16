import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageClassicMassage from "../pages/PageClassicMassage";
import PageCoupleMassage from "../pages/PageCoupleMassage";
import PageLashEnhancement from "../pages/PageLashEnhancement";
import PageLipLiner from "../pages/PageLipLiner";
import PageMicroblading from "../pages/PageMicroblading";
import PageMicrobladingOmbreCombo from "../pages/PageMicrobladingOmbreCombo";
import PageMicroOmbreTouchUps from "../pages/PageMicroOmbreTouchUps";
import PageOmbreShading from "../pages/PageOmbreShading";
import PagePermanentEyeliner from "../pages/PagePermanentEyeliner";
import PagePremiumMassage from "../pages/PagePremiumMassage";
import WidgetExpandable from "../WidgetExpandable";


const PageServicesPermanentMakeup = (props) => {
  const {expandedId, _expandSingle} = useExpandSingle();

  return (
    <Page>
      <PageContent>

        {/* <h3>Massage</h3> */}

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MICROBLADING'} expandableLevel={2} >
          <PageMicroblading />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'OMBRE_SHADING'} expandableLevel={2} >
          <PageOmbreShading />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MICROBLADING_AND_OMBRE_SHADING_COMB0'} expandableLevel={2}>
          <PageMicrobladingOmbreCombo />
        </WidgetExpandable>
        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MICROBLADING_OMBRE_TOUCH_UP'} expandableLevel={2}>
          <PageMicroOmbreTouchUps />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'PERMANENT_EYELINER'} expandableLevel={2}>
          <PagePermanentEyeliner />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'LASH_ENHANCEMENT'} expandableLevel={2}>
          <PageLashEnhancement />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'LIP_LINER'} expandableLevel={2}>
          <PageLipLiner />
        </WidgetExpandable>


      </PageContent>
    </Page>
  );
};

export default PageServicesPermanentMakeup;