import { useState } from "react";


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

  return (
    <>
      <div className={expanded ? "widget-expandable expanded" : "widget-expandable"}>
        <header onClick={(e)=>{props._expandSingle(id)}}>TITLE HERE...</header>
        <div className="expandable">
          <div className="pad">Nesto skriveno</div>
        </div>
      </div>
    </>
  );
};

export default WidgetExpandable;