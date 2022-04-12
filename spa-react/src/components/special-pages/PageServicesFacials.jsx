import { useState } from "react";
import Page from "../Page";
import PageContent from "../PageContent";
import PageBasicBotanical from "../pages/PageBasicBotanical";
import WidgetExpandable from "../WidgetExpandable";


const PageServicesFacials = (props) => {

  const [expandedId, setExpandedId] = useState(null);

  const _expandSingle = (id) => {
    if (expandedId === id) {
      setExpandedId(null); // ako dva puta kliknemo na isti id onda ga zatvaramo
    } else {
      setExpandedId(id);
    }
  };

  return (
    <Page>
      <PageContent>

        <h3>facials</h3>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'BASIC_BOTANICAL'} expandableLevel={2} >
          <PageBasicBotanical />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'SPECIALTY_DREAM_SKIN'} expandableLevel={2} ></WidgetExpandable>
        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'PREMIUM_PAMPER'} expandableLevel={2}></WidgetExpandable>


      </PageContent>
    </Page>
  );
};

export default PageServicesFacials;