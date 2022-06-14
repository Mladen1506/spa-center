import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageHydrafacial from "../pages/PageHydrafacial";
import PageHydrafacialMembership from "../pages/PageHydrafacialMembership";
import PageHydrafacialTakeHome from "../pages/PageHydrafacialTakeHome";
import WidgetExpandable from "../WidgetExpandable";


const PageServicesHydrafacial = (props) => {
  const {expandedId, _expandSingle} = useExpandSingle();

  return (
    <Page>
      <PageContent>


        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'HYDRAFACIAL'} expandableLevel={3}>
          <PageHydrafacial />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'HYDRAFACIAL_MEMBERSHIP'} expandableLevel={3}>
          <PageHydrafacialMembership />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'HYDRAFACIAL_TAKE_HOME'} expandableLevel={3}>
          <PageHydrafacialTakeHome />
        </WidgetExpandable>


      </PageContent>
    </Page>
  );
};

export default PageServicesHydrafacial;