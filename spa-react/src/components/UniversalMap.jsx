import { useEffect } from "react";



const UniversalMap = (props)=> {

  useEffect(() => {
    // this will be executet on component mount

    // const position = [51.505, -0.09];
    // 38.8765507,-77.1141811
    // const ll = [38.8765507, -77.1141811]; // lat long (latitude, longtitude)
    const ll = props.ll; // lat long (latitude, longtitude)
    const zoom = props.zoom; // lat long (latitude, longtitude)
    if (window.mymapscript && typeof window.mymapscript.init === 'function') {
      window.mymapscript.init(ll, zoom);
    }
  }, []);

  return (
    <div className="map-widget-group">
      <div className="map-widget" id="map-dom-parent">
        <div className="IF_YOU_SEE_THIS_MAP_IS_NOT_RENDERED">IF YOU SEE THIS MAP IS NOT RENDERED</div>
      </div>
    </div>
  );
};


export default UniversalMap;