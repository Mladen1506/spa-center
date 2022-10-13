import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
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