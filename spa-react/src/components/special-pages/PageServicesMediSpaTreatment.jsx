import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageAquaGold from "../pages/PageAquaGold";
import PageCapillaryRepair from "../pages/PageCapillaryRepair";
import PageCo2 from "../pages/PageCo2";
import PageDiscoloration from "../pages/PageDiscoloration";
import PageErbium from "../pages/PageErbium";
import PageForma from "../pages/PageForma";
import PageHighFrequency from "../pages/PageHighFrequency";
import PageIPL from "../pages/PageIPL";
import PageLaserSkinTightening from "../pages/PageLaserSkinTightening";
import PageMicroNeedling from "../pages/PageMicroNeedling";
import PageMorpheus from "../pages/PageMorpheus";
import PageVaginal from "../pages/PageVaginal";
import PageVascular from "../pages/PageVascular";
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

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'IPL'} expandableLevel={2} >
          <PageIPL />
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

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MORPHEUS_8'} expandableLevel={2}>
          <PageMorpheus />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'ERBIUM'} expandableLevel={2}>
          <PageErbium />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'VASCULAR'} expandableLevel={2}>
          <PageVascular />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'VAGINAL_REJUVENATION'} expandableLevel={2}>
          <PageVaginal />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'FORMA'} expandableLevel={2}>
          <PageForma />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'CO_2'} expandableLevel={2}>
          <PageCo2 />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'HIGH_FREQUENCY_FACIAL'} expandableLevel={2}>
          <PageHighFrequency />
        </WidgetExpandable>


      </PageContent>
    </Page>
  );
};

export default PageServicesMediSpaTreatment;