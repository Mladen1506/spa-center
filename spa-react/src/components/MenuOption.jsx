const MenuOption = (props) => {
  return (
    <div className="option" onClick={props.handleClick}>{props.title}</div>
  );
};

export default MenuOption;