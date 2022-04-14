import { useState } from "react";
import { imagesFolderUrl } from "../../utils/url-lib";
import ContactForm from "../ContactForm";
import CoverImage from "../CoverImage";
import Page from "../Page";
import PageContent from "../PageContent";


const PageContact = (props) => {

  return (
    <>
      <CoverImage src={imagesFolderUrl("cover1.png")} alt="Spa services" />
      <Page>
        <PageContent>

          <h3>Contact</h3>

          <ContactForm />

        </PageContent>
      </Page>
    </>
  );
};

export default PageContact;