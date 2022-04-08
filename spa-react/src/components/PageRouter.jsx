import PageHome from "./special-pages/PageHome";
import PageAquaGold from "./pages/PageAquaGold";
import { useSelector } from "react-redux";


const PageRouter = (props) => {

  // const route = 'HOME';
  const route = useSelector(state => state.route);

  let jsx = null;
  if (route === 'HOME') {
    jsx = (
      <PageHome />
    );
  } else if (route === 'AQUA_GOLD') {
    jsx = (
      <PageAquaGold />
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