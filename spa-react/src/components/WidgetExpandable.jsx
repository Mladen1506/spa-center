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

  let expandableLevel = 0
  if (props.expandableLevel > 0) {
    expandableLevel = props.expandableLevel;
  }

  let cl2 = "";
  if (expandableLevel === 2) {
    cl2 = " expandable-second-level";
  } else if (expandableLevel === 3) {
    cl2 = " expandable-third-level";
  } else if (expandableLevel === 4) {
    cl2 = " expandable-4th-level";
  }

  return (
    <>
      <div className={(expanded ? "widget-expandable expanded" : "widget-expandable") + cl2} data-expandable-level={expandableLevel} data-expanded={expanded}>
        <header onClick={(e) => { props._expandSingle(id) }}>{get_route_title(id)}</header>
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