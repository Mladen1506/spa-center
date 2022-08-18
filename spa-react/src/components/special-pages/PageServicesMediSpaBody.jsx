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
import WidgetExpandable from "../WidgetExpandable";
import PageVaginal from "../pages/PageVaginal";
import PageVascular from "../pages/PageVascular";
import PageMorpheus8Body from "../pages/PageMorpheus8Body";
import PageCelluliteTreatment from "../pages/PageCelluliteTreatment";


const PageServicesMediSpaBody = (props) => {
  const { expandedId, _expandSingle } = useExpandSingle();

  return (
    <Page>
      <PageContent>

        {/* <h3>facials</h3> */}
        <h3 className="sitemap-heading"><a href="/services#medi-spa">Services</a> &gt; Medi-Spa &gt; Body</h3>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MORPHEUS_8_BODY'} expandableLevel={3}>
          <PageMorpheus8Body />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'VASCULAR'} expandableLevel={3}>
          <PageVascular />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'VAGINAL_REJUVENATION'} expandableLevel={3}>
          <PageVaginal />
        </WidgetExpandable>

        {/* <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'CELLULITE_TREATMENT'} expandableLevel={3}>
          <PageCelluliteTreatment />
        </WidgetExpandable> */}


      </PageContent>
    </Page>
  );
};

export default PageServicesMediSpaBody;