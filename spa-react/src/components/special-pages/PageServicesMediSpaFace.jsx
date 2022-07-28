import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageAquaGold from "../pages/PageAquaGold";
import PageCandela from "../pages/PageCandela";
import PageCapillaryRepair from "../pages/PageCapillaryRepair";
import PageCo2 from "../pages/PageCo2";
import PageDiscoloration from "../pages/PageDiscoloration";
import PageErbium from "../pages/PageErbium";
import PageForma from "../pages/PageForma";
import PageHighFrequency from "../pages/PageHighFrequency";
import PageIPL from "../pages/PageIPL";
import PageLaserSkinTightening from "../pages/PagePicoLaser";
import PageMicroNeedling from "../pages/PageMicroNeedling";
import PageMorpheus from "../pages/PageMorpheus";
import PageVaginal from "../pages/PageVaginal";
import PageVascular from "../pages/PageVascular";
import WidgetExpandable from "../WidgetExpandable";
import PageInjectables from "../pages/PageInjectables";


const PageServicesMediSpaFace = (props) => {
  const { expandedId, _expandSingle } = useExpandSingle();

  return (
    <Page>
      <PageContent>

        {/* <h3>facials</h3> */}
        <h3 className="sitemap-heading"><a href="/services#medi-spa">Services</a> &gt; Medi-Spa &gt; Face</h3>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'AQUA_GOLD'} expandableLevel={3} >
          <PageAquaGold />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'IPL'} expandableLevel={3} >
          <PageIPL />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'LASER_SKIN_TIGHTENING'} expandableLevel={3}>
          <PageLaserSkinTightening />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'CANDELA_SKIN'} expandableLevel={3}>
          <PageCandela />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'LASER_DISCOLORATION_REMOVAL'} expandableLevel={3}>
          <PageDiscoloration />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'CAPILLARY_REPAIR'} expandableLevel={3}>
          <PageCapillaryRepair />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MICRO_NEEDLING'} expandableLevel={3}>
          <PageMicroNeedling />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MORPHEUS_8'} expandableLevel={3} htmlId="morpheus-8">
          <PageMorpheus />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'ERBIUM'} expandableLevel={3}>
          <PageErbium />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'FORMA'} expandableLevel={3}>
          <PageForma/>
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'CO_2'} expandableLevel={3}>
          <PageCo2 />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'HIGH_FREQUENCY_FACIAL'} expandableLevel={3}>
          <PageHighFrequency />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'INJECTABLES'} expandableLevel={3}>
          <PageInjectables />
        </WidgetExpandable>


      </PageContent>
    </Page>
  );
};

export default PageServicesMediSpaFace;