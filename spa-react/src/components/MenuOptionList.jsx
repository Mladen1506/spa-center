import { useDispatch, useSelector } from "react-redux";
import { actionRouteSet } from "../redux/actions";
import MenuOption from "./MenuOption";

const MenuOptionList = (props) => {
  const dispatch = useDispatch();
  const route = useSelector(state => state.route);

  const _handleClickOption = (route) => {
    dispatch(actionRouteSet(route));
  };

  return (
    <>
      <MenuOption title={'Home'} active={route === 'HOME'} handleClick={(e) => { _handleClickOption('HOME') }} />
      <MenuOption title={'Aqua'} active={route === 'AQUA_GOLD'} handleClick={(e) => { _handleClickOption('AQUA_GOLD') }} />
      <MenuOption title={'Nestooooo'} />
      <MenuOption title={'Nesto'} />
      <MenuOption title={'Nestooo'} />
      <MenuOption title={'Nesto'} />
    </>
  );
};

export default MenuOptionList;