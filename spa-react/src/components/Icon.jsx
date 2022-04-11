const Icon = (props) => {

  // <i className="fa fa-search" aria-hidden="true"></i>
  return (
    <abbr title={props.title}>
      <i className={props.fa} aria-hidden="true" onClick={props.handleClick}></i>
    </abbr>
  );
};

export default Icon;