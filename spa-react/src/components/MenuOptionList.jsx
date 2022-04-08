import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionRouteSet } from "../redux/actions";
import { get_level_1_routes } from "../utils/routes-lib";
import MenuOption from "./MenuOption";

const MenuOptionList = (props) => {
  const dispatch = useDispatch();
  const route = useSelector(state => state.route);

  const [level1Options, setLevel1Options] = useState([]);

  useEffect(()=>{
    setLevel1Options(get_level_1_routes())
  }, []);

  const _handleClickOption = (route) => {
    dispatch(actionRouteSet(route));
  };

  console.log(level1Options);

  return (
    <>
      {level1Options.map((item, index) => {
        return (
          <MenuOption key={index} level={1} title={item.title} active={route === item.route} handleClick={(e) => { _handleClickOption(item.route) }} />
        );
      })}
    </>
  );
};

export default MenuOptionList;