import { useState } from "react";


const WidgetExpandable = (props) => {

  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = (e)=>{
    if (expanded) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  };

  return (
    <>
      <div className={expanded ? "widget-expandable expanded" : "widget-expandable"}>
        <header onClick={handleToggleExpand}>FACIALS...</header>
        <div className="expandable">
          <div className="pad">Nesto skriveno</div>
        </div>
      </div>
    </>
  );
};

export default WidgetExpandable;