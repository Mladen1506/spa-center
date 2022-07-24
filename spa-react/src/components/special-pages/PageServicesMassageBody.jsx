import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageCelluliteBody from "../pages/PageCelluliteBody";
import PageOrganicBackSkincare from "../pages/PageOrganicBackSkincare";
import PageOrganicBodySpa from "../pages/PageOrganicBodySpa";
import WidgetExpandable from "../WidgetExpandable";


const PageServicesMassageBody = (props) => {
  const {expandedId, _expandSingle} = useExpandSingle();

  return (
    <Page>
      <PageContent>

        <h3 className="sitemap-heading"><a href="/services#body">Services</a> &gt; Body</h3>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'ORGANIC_BODY_SPA'} expandableLevel={2} >
          <PageOrganicBodySpa />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'ORGANIC_BACK_SKINCARE'} expandableLevel={2} >
          <PageOrganicBackSkincare />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'CELLULITE_BODY_WRAP'} expandableLevel={2}>
          <PageCelluliteBody />
        </WidgetExpandable>


      </PageContent>
    </Page>
  );
};

export default PageServicesMassageBody;