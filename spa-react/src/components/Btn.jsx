const Btn = (props) => {
  return (
    <div className="btn" onClick={props.handleClick}>{props.children}</div>
  );
};

export default Btn;