import { useSelector } from "react-redux";
import { get_children_routes } from "../utils/routes-lib";
import Icon from "./Icon";

const MenuOption = (props) => {
  const route = useSelector(state => state.route);
  const item = props.item;

  // props.level je level ove opcije u meniju
  const childrenLevel = item.level + 1;

  const childrenOptions = get_children_routes(item.route, childrenLevel);
  // console.log(childrenOptions);

  const _handleClickOption = props._handleClickOption;

  let jsxTriangle = null;
  if (item.hasChildren === true) {
    jsxTriangle = (
      <>
        &nbsp;<Icon fa="fa fa-caret-down" />
      </>
    );
  }


  return (
    <div
      className={route === item.route ? "option active" : "option"}
      onClick={(e) => { e.stopPropagation(); _handleClickOption(item.route) }}
    >{item.title}{jsxTriangle}
      <div className="submenu">

        {childrenOptions.map((item, index) => {
          return (
            <MenuOption
              key={index}
              level={1}
              item={item}
              _handleClickOption={_handleClickOption}
            />
          );
        })}

      </div>
    </div>
  );
};

export default MenuOption;