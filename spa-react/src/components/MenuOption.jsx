import { useSelector } from "react-redux";

const MenuOption = (props) => {
  // const route = useSelector(state => state.route);
  return (
    <div className={props.active ? "option active" : "option"} onClick={props.handleClick}>{props.title}</div>
  );
};

export default MenuOption;