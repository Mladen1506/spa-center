import { useSelector } from "react-redux";
import Breadcrumbs from "./Breadcrumbs";

const Page = (props) => {
  return (
    <div className="page-inner">
      <Breadcrumbs />
      {props.children}
    </div>
  );
};

export default Page;