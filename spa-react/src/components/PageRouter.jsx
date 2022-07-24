import { useEffect } from "react";
import { useSelector } from "react-redux";
import PageHome from "./special-pages/PageHome";
import PageServices from "./special-pages/PageServices";
import PageOurTeam from "./special-pages/PageOurTeam";
import PageProducts from "./special-pages/PageProducts";
import PageGallery from "./special-pages/PageGallery";
import PageGiftCertificates from "./special-pages/PageGiftCertificates";
import PageContact from "./special-pages/PageContact";
import PageAbout from "./special-pages/PageAbout";
import PageTerms from "./special-pages/PageTerms";
import PagePrivacyPolicy from "./special-pages/PagePrivacyPolicy";
import PageSitemap from "./special-pages/PageSitemap";
import PageSitemapWrapper from "./PageSitemapWrapper";
import PageServicesFacials from "./special-pages/PageServicesFacials";
import PageServicesMediSpaTreatment from "./special-pages/PageServicesMediSpaTreatment";
import PageServicesHairRemoval from "./special-pages/PageServicesHairRemoval";
import PageServicesPermanentMakeup from "./special-pages/PageServicesPermanentMakeup";
import PageServicesMassage from "./special-pages/PageServicesMassage";
import PageServicesMassageBody from "./special-pages/PageServicesMassageBody";
import PageServicesBrowAndLash from "./special-pages/PageServicesBrowAndLash";
import PageNails from "./pages/PageNails";
import PageHairBar from "./pages/PageHairBar";
import PageComboTreats from "./pages/PageComboTreats";
import PageOccasional from "./pages/PageOccasional";

/*
import PageAquaGold from "./pages/PageAquaGold";
import PageFacials from "./pages/PageFacials";
import PageSpaSkinCare from "./pages/PageSpaSkinCare";
import PageBasicBotanical from "./pages/PageBasicBotanical.jsx";
import PageMassageBody from "./pages/PageMassageBody";
import PageMorpheus from "./pages/PageMorpheus";
import PageMagicFix from "./pages/PageMagicFix";
import PageWomenLaser from "./pages/PageWomenLaser";
import PageServicesLaser from "./special-pages/PageServicesLaser";
*/

const PageRouter = (props) => {

  // const route = 'HOME';
  const route = useSelector(state => state.route);

  useEffect(() => {
    if (route === 'HOME') {
      document.body.classList.add("page-is-home"); // js
    } else {
      document.body.classList.remove("page-is-home"); // js
    }
  }, [route]);

  let jsx = null;
  jsx = (
    <div>Page {route} not found!</div>
  ); // default

  if (route === 'HOME') {
    jsx = (
      <PageHome />
    );
  } else if (route === 'SITEMAP') {
    jsx = (
      <PageSitemap />
    );
  } else if (route === 'SERVICES') {
    jsx = (
      <PageServices />
    );
  } else if (route === 'ARTISTS') {
    jsx = (
      <PageOurTeam />
    );
  } else if (route === 'PRODUCTS') {
    jsx = (
      <PageProducts />
    );
  } else if (route === 'GALLERY') {
    jsx = (
      <PageGallery />
    );
  } else if (route === 'GIFTCARDS') {
    jsx = (
      <PageGiftCertificates />
    );
  } else if (route === 'CONTACT') {
    jsx = (
      <PageContact />
    );
  } else if (route === 'ABOUT') {
    jsx = (
      <PageAbout />
    );
  } else if (route === 'TERMS') {
    jsx = (
      <PageTerms />
    );
  } else if (route === 'PRIVACY') {
    jsx = (
      <PagePrivacyPolicy />
    );

    // ROUTES FOR SERVICES AND SITEMAP

  } else if (route === 'FACIALS') {
    jsx = (
      <PageSitemapWrapper>
        <PageServicesFacials />
      </PageSitemapWrapper>
    );
  } else if (route === 'MEDI_SPA') {
    jsx = (
      <PageSitemapWrapper>
        <PageServicesMediSpaTreatment />
      </PageSitemapWrapper>
    );
  } else if (route === 'HAIR_REMOVAL') {
    jsx = (
      <PageSitemapWrapper>
        <PageServicesHairRemoval />
      </PageSitemapWrapper>
    );
  } else if (route === 'PERMANENT_MAKEUP') {
    jsx = (
      <PageSitemapWrapper>
        <PageServicesPermanentMakeup />
      </PageSitemapWrapper>
    );
  } else if (route === 'MASSAGE') {
    jsx = (
      <PageSitemapWrapper>
        <PageServicesMassage />
      </PageSitemapWrapper>
    );
  } else if (route === 'BODY') {
    jsx = (
      <PageSitemapWrapper>
        <PageServicesMassageBody />
      </PageSitemapWrapper>
    );

  } else if (route === 'BROW_LASH_BAR') {
    jsx = (
      <PageSitemapWrapper>
        <PageServicesBrowAndLash />
      </PageSitemapWrapper>
    );
  } else if (route === 'NAILS') {
    jsx = (
      <PageSitemapWrapper>
        <PageNails />
      </PageSitemapWrapper>
    );
  } else if (route === 'HAIR') {
    jsx = (
      <PageSitemapWrapper>
        <PageHairBar />
      </PageSitemapWrapper>
    );
  } else if (route === 'PACKAGES') {
    jsx = (
      <PageSitemapWrapper>
        <PageComboTreats />
      </PageSitemapWrapper>
    );
  } else if (route === 'OCCASIONAL') {
    jsx = (
      <PageSitemapWrapper>
        <PageOccasional />
      </PageSitemapWrapper>
    );

    /*
     */
  } else {

  }


  return (
    <>
      {jsx}
    </>
  );
};

export default PageRouter;