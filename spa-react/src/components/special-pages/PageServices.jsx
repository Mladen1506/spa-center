import { useState } from "react";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import WidgetExpandable from "../WidgetExpandable";
import PageServicesFacials from "./PageServicesFacials";
import PageServicesMassage from "./PageServicesMassage";
import PageServicesBody from "./PageServicesMassageBody";


const PageServices = (props) => {
  const { expandedId, _expandSingle } = useExpandSingle();

  return (
    <Page>
      <PageContent>

        <h1>Services</h1>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'FACIALS'} >
          <PageServicesFacials />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MASSAGE'} >
          <PageServicesMassage />
        </WidgetExpandable>

        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'BODY'} >
          <PageServicesBody/>
        </WidgetExpandable>


        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'BROW_LASH_BAR'} ></WidgetExpandable>
        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'MEDI_SPA'} ></WidgetExpandable>
        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'HAIR_REMOVAL'} ></WidgetExpandable>
        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'PERMANENT_MAKEUP'} ></WidgetExpandable>
        <WidgetExpandable expandedId={expandedId} _expandSingle={_expandSingle} id={'PACKAGES'} ></WidgetExpandable>

      </PageContent>
    </Page>
  );
};

export default PageServices;