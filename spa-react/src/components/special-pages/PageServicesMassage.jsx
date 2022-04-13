import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageBasicBotanical from "../pages/PageBasicBotanical";
import WidgetExpandable from "../WidgetExpandable";


const PageServicesMassage = (props) => {
  const {expandedId, _expandSingle} = useExpandSingle();

  return (
    <Page>
      <PageContent>

        <h3>Massage</h3>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'CLASSIC_MASSAGE_EXP'} expandableLevel={2} >
          
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'PREMIUM_MASSAGE_EXP'} expandableLevel={2} >

        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'COUPLE_MASSAGE_EXP'} expandableLevel={2}>

        </WidgetExpandable>


      </PageContent>
    </Page>
  );
};

export default PageServicesMassage;