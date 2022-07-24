import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageElectrolysis from "../pages/PageElectrolysis";
import PageWaxingAndThreading from "../pages/PageWaxingAndThreading";
import WidgetExpandable from "../WidgetExpandable";
import PageServicesLaser from "./PageServicesLaser";


const PageServicesHairRemoval = (props) => {
  const { expandedId, _expandSingle } = useExpandSingle();

  return (
    <Page>
      <PageContent>

        {/* <h3>Massage</h3> */}
        <h3 className="sitemap-heading"><a href="/services#hair-removal">Services</a> &gt; Hair Removal</h3>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'LASER'} expandableLevel={2} >
          <PageServicesLaser />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'ELECTROLYSIS'} expandableLevel={2} >
          <PageElectrolysis />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'WAXING_AND_THREADING'} expandableLevel={2}>
          <PageWaxingAndThreading />
        </WidgetExpandable>


      </PageContent>
    </Page>
  );
};

export default PageServicesHairRemoval;