import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageAquaGold from "../pages/PageAquaGold";
import PageCapillaryRepair from "../pages/PageCapillaryRepair";
import PageDiscoloration from "../pages/PageDiscoloration";
import PageLaserSkinTightening from "../pages/PageLaserSkinTightening";
import PageMicroNeedling from "../pages/PageMicroNeedling";
import WidgetExpandable from "../WidgetExpandable";
import PageServicesMediSpaTreatmentVenusConcept from "./PageServicesMediSpaTreatmentVenusConcept";


const PageServicesMediSpaTreatment = (props) => {
  const {expandedId, _expandSingle} = useExpandSingle();

  return (
    <Page>
      <PageContent>

        {/* <h3>facials</h3> */}

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'AQUA_GOLD'} expandableLevel={2} >
          <PageAquaGold />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'VENUS_CONCEPT'} expandableLevel={2} >
          <PageServicesMediSpaTreatmentVenusConcept />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'LASER_SKIN_TIGHTENING'} expandableLevel={2}>
          <PageLaserSkinTightening />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'LASER_DISCOLORATION_REMOVAL'} expandableLevel={2}>
         <PageDiscoloration />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'CAPILLARY_REPAIR'} expandableLevel={2}>
          <PageCapillaryRepair />
        </WidgetExpandable>
        
        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MICRO_NEEDLING'} expandableLevel={2}>
          <PageMicroNeedling />
        </WidgetExpandable>


      </PageContent>
    </Page>
  );
};

export default PageServicesMediSpaTreatment;