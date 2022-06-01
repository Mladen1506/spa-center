import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageLaserMan from "../pages/PageLaserMan";
import PageWomenLaser from "../pages/PageWomenLaser";
import WidgetExpandable from "../WidgetExpandable";


const PageServicesLaser = (props) => {
  const { expandedId, _expandSingle } = useExpandSingle();

  return (
    <Page>
      <PageContent>

        {/* <h3>facials</h3> */}

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'WOMEN'} expandableLevel={3} >
          <PageWomenLaser />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MEN'} expandableLevel={3} >
          <PageLaserMan />
        </WidgetExpandable>

      </PageContent>
    </Page>
  );
};

export default PageServicesLaser;