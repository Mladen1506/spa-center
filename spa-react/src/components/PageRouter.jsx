import PageHome from "./special-pages/PageHome";
import PageAquaGold from "./pages/PageAquaGold";
import { useSelector } from "react-redux";
import PageFacials from "./pages/PageFacials";
import PageSpaSkinCare from "./pages/PageSpaSkinCare";
import PageBasicBotanical from "./pages/PageBasicBotanical.jsx";
import PageMassageBody from "./pages/PageMassageBody";
import PageServices from "./special-pages/PageServices";
import PageContact from "./special-pages/PageContact";
import PageTerms from "./special-pages/PageTerms";
import PagePrivacyPolicy from "./special-pages/PagePrivacyPolicy";
import PageAbout from "./special-pages/PageAbout";
import PageGiftCertificates from "./special-pages/PageGiftCertificates";
import { useEffect } from "react";
import PageOurTeam from "./pages/PageOurTeam";
import PageProducts from "./pages/PageProducts";
import PageMorpheus from "./pages/PageMorpheus";
import PageMagicFix from "./pages/PageMagicFix";
import PageWomenLaser from "./pages/PageWomenLaser";
import PageServicesLaser from "./special-pages/PageServicesLaser";


const PageRouter = (props) => {

  // const route = 'HOME';
  const route = useSelector(state => state.route);

  useEffect(()=>{
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
  } else if (route === 'TERMS') {
    jsx = (
      <PageTerms />
    );
  } else if (route === 'PRIVACY') {
    jsx = (
      <PagePrivacyPolicy />
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

  } else if (route === 'SPA_SKIN_CARE') {
    jsx = (
      <PageSpaSkinCare />
    );
  } else if (route === 'FACIALS') {
    jsx = (
      <PageFacials />
    );
  } else if (route === 'BASIC_BOTANICAL') {
    jsx = (
      <PageBasicBotanical />
    );
    /*
  } else if (route === 'MEDI_SKIN_CARE') {
    jsx = (
      <PageSpaSkinCare/>
    );
    */
  } else if (route === 'AQUA_GOLD') {
    jsx = (
      <PageAquaGold />
    );
  } else if (route === 'MASSAGE_BODY') {
    jsx = (
      <PageMassageBody />
    );
  } else if (route === 'MORPHEUS8') {
    jsx = (
      <PageMorpheus />
    );
  } else if (route === 'HAIR_REMOVAL') {
    jsx = (
      <PageServicesLaser />
    );
  } else if (route === 'MAGIC_FIX') {
    jsx = (
      <PageMagicFix />
    );
  } else {

  }


  return (
    <>
      {jsx}
    </>
  );
};

export default PageRouter;