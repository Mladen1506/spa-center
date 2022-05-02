import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageElectrolysis from "../pages/PageElectrolysis";
import PageLaserWomen from "../pages/PageLaser";
import WidgetExpandable from "../WidgetExpandable";


const PageServicesHairRemoval = (props) => {
  const { expandedId, _expandSingle } = useExpandSingle();

  return (
    <Page>
      <PageContent>

        {/* <h3>Massage</h3> */}

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'LASER'} expandableLevel={2} >
          <PageLaserWomen />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'ELECTROLYSIS'} expandableLevel={2} >
          <PageElectrolysis />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'WAXING'} expandableLevel={2} >
          
        </WidgetExpandable>


      </PageContent>
    </Page>
  );
};

export default PageServicesHairRemoval;