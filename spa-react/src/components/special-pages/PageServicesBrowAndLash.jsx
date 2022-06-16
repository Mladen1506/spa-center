import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageBrowLamination from "../pages/PageBrowLamination";
import PageLashLift from "../pages/PageLashLift";
import PageTinting from "../pages/PageTinting";
import WidgetExpandable from "../WidgetExpandable";


const PageServicesBrowAndLash = (props) => {
  const {expandedId, _expandSingle} = useExpandSingle();

  return (
    <Page>
      <PageContent>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'LASH_LIFT'} expandableLevel={2} >
          <PageLashLift />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'TINTING'} expandableLevel={2} >
          <PageTinting />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'BROW_LAMINATION'} expandableLevel={2}>
          <PageBrowLamination />
        </WidgetExpandable>


      </PageContent>
    </Page>
  );
};

export default PageServicesBrowAndLash;