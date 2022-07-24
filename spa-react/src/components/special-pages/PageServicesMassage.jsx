import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageClassicMassage from "../pages/PageClassicMassage";
import PageCoupleMassage from "../pages/PageCoupleMassage";
import PagePremiumMassage from "../pages/PagePremiumMassage";
import WidgetExpandable from "../WidgetExpandable";


const PageServicesMassage = (props) => {
  const {expandedId, _expandSingle} = useExpandSingle();

  return (
    <Page>
      <PageContent>

        {/* <h3>Massage</h3> */}

        <h3 className="sitemap-heading"><a href="/services#massage">Services</a> &gt; Massage</h3>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'CLASSIC_MASSAGE_EXP'} expandableLevel={2} >
          <PageClassicMassage />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'PREMIUM_MASSAGE_EXP'} expandableLevel={2} >
          <PagePremiumMassage />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'COUPLE_MASSAGE_EXP'} expandableLevel={2}>
          <PageCoupleMassage />
        </WidgetExpandable>


      </PageContent>
    </Page>
  );
};

export default PageServicesMassage;