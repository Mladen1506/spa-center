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
import PageServicesMediSpaFace from "./PageServicesMediSpaFace";
import PageServicesMediSpaBody from "./PageServicesMediSpaBody";
import PageServicesMediSpaWellness from "./PageServicesMediSpaWellness";


const PageServicesMediSpa = (props) => {
  const { expandedId, _expandSingle } = useExpandSingle();

  return (
    <Page>
      <PageContent>

        {/* <h3>facials</h3> */}
        <h3 className="sitemap-heading"><a href="/services#medi-spa">Services</a> &gt; Medi-Spa</h3>


        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MEDI_SPA_FACE'} expandableLevel={2} >
          <PageServicesMediSpaFace />
        </WidgetExpandable>


        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MEDI_SPA_BODY'} expandableLevel={2} >
          <PageServicesMediSpaBody />
        </WidgetExpandable>


        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MEDI_SPA_WELLNESS'} expandableLevel={2} >
          <PageServicesMediSpaWellness />
        </WidgetExpandable>

      </PageContent>
    </Page>
  );
};

export default PageServicesMediSpa;