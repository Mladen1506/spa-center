import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageIVTreatmant from "../pages/PageIVTreatmant";
import PagePRPHead from "../pages/PagePRPHead";
import PageVitaminInjections from "../pages/PageVitaminInjections";
import WidgetExpandable from "../WidgetExpandable";


const PageServicesMediSpaWellness = (props) => {
  const { expandedId, _expandSingle } = useExpandSingle();

  return (
    <Page>
      <PageContent>

        {/* <h3>facials</h3> */}
        <h3 className="sitemap-heading"><a href="/services#medi-spa">Services</a> &gt; Medi-Spa &gt; Wellness & Health</h3>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'IV_TREATMANT'} expandableLevel={3} >
          <PageIVTreatmant />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'VITAMIN_INJECTIONS'} expandableLevel={3} >
          <PageVitaminInjections />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'PRP_HEAD'} expandableLevel={3} >
          <PagePRPHead />
        </WidgetExpandable>



      </PageContent>
    </Page>
  );
};

export default PageServicesMediSpaWellness;