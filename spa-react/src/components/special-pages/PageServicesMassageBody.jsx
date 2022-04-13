import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageBasicBotanical from "../pages/PageBasicBotanical";
import WidgetExpandable from "../WidgetExpandable";


const PageServicesBody = (props) => {
  const {expandedId, _expandSingle} = useExpandSingle();

  return (
    <Page>
      <PageContent>

        <h3>body</h3>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'ORGANIC_BODY_SPA'} expandableLevel={2} >
          
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'ORGANIC_BACK_SKINCARE'} expandableLevel={2} >

        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'CELLULITE_BODY_WRAP'} expandableLevel={2}>

        </WidgetExpandable>


      </PageContent>
    </Page>
  );
};

export default PageServicesBody;