import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageAquaGold from "../pages/PageAquaGold";
import PageIPL from "../pages/PageIPL";
import PageLaserMan from "../pages/PageLaserMan";
import PageVenusViva from "../pages/PageVenusViva";
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

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MAN'} expandableLevel={3} >
          <PageLaserMan />
        </WidgetExpandable>

      </PageContent>
    </Page>
  );
};

export default PageServicesLaser;