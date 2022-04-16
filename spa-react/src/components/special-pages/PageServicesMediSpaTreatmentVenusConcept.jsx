import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageAquaGold from "../pages/PageAquaGold";
import PageIPL from "../pages/PageIPL";
import PageVenusViva from "../pages/PageVenusViva";
import WidgetExpandable from "../WidgetExpandable";


const PageServicesMediSpaTreatmentVenusConcept = (props) => {
  const { expandedId, _expandSingle } = useExpandSingle();

  return (
    <Page>
      <PageContent>

        {/* <h3>facials</h3> */}

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'VENUS_VIVA'} expandableLevel={3} >
          <PageVenusViva />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'IPL'} expandableLevel={3} >
          <PageIPL />
        </WidgetExpandable>

      </PageContent>
    </Page>
  );
};

export default PageServicesMediSpaTreatmentVenusConcept;