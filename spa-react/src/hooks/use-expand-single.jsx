import { useState } from "react";

export const useExpandSingle = () => {
  const [expandedId, setExpandedId] = useState(null);

  const _expandSingle = (id) => {
    if (expandedId === id) {
      setExpandedId(null); // ako dva puta kliknemo na isti id onda ga zatvaramo
    } else {
      setExpandedId(id);
    }
  };

  // return [expandedId, setExpandedId, _expandSingle];
  return {expandedId, setExpandedId, _expandSingle};
};