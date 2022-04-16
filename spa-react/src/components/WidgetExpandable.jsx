import { useState } from "react";
import { get_route_title } from "../utils/routes-lib";


const WidgetExpandable = (props) => {

  /*
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = (e)=>{
    if (expanded) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  };
  */

  const id = props.id;

  let expanded = false;
  if (id === props.expandedId) {
    // ako sam to ja onda se expandujem
    expanded = true;
  }

  let cl2 = "";
  if (props.expandableLevel === 2) {
    cl2 = " expandable-second-level";
  } else if (props.expandableLevel === 3) {
    cl2 = " expandable-third-level";
  }

  return (
    <>
      <div className={(expanded ? "widget-expandable expanded" : "widget-expandable") + cl2}>
        <header onClick={(e)=>{props._expandSingle(id)}}>{get_route_title(id)}</header>
        <div className="expandable">
          <div className="pad">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetExpandable;