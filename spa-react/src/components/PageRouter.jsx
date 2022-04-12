import PageHome from "./special-pages/PageHome";
import PageAquaGold from "./pages/PageAquaGold";
import { useSelector } from "react-redux";
import PageFacials from "./pages/PageFacials";
import PageSpaSkinCare from "./pages/PageSpaSkinCare";
import PageBasicBotanical from "./pages/PageBasicBotanical.jsx";
import PageMassageBody from "./pages/PageMassageBody";
import PageServices from "./special-pages/PageServices";


const PageRouter = (props) => {

  // const route = 'HOME';
  const route = useSelector(state => state.route);

  let jsx = null;
  if (route === 'HOME') {
    jsx = (
      <PageHome />
    );
  } else if (route === 'SERVICES') {
    jsx = (
      <PageServices />
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
      <PageMassageBody/>
    );
  } else {
    jsx = (
      <div>Page {route} not found!</div>
    );
  }


  return (
    <>
      {jsx}
    </>
  );
};

export default PageRouter;