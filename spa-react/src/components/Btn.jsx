

const Btn = (props) => {



  let jsx = null;
  if (typeof props.href === 'string' && props.href !== '') {
    // make <a> 
    if (typeof props.handleClick === 'function') {
      // koristimo onClick
      if (props.newTab === true) {
        jsx = (
          <a
            className="btn"
            target="_blank"
            rel="noreferrer"
            href={props.href}
            onClick={props.handleClick}
          >{props.children}</a>
        );
      } else {
        jsx = (
          <a
            className="btn"
            href={props.href}
            onClick={props.handleClick}
          >{props.children}</a>
        );
      }
    } else {
      if (props.newTab === true) {
        // open url in new tab
        jsx = (
          <a
            className="btn"
            target="_blank"
            rel="noreferrer"
            href={props.href}
          >{props.children}</a>
        );
      } else {
        // <a> without target attribute
        jsx = (
          <a
            className="btn"
            href={props.href}
          >{props.children}</a>
        );
      }
    }
  } else {
    // <div> button
    jsx = (
      <div
        className="btn"
        onClick={props.handleClick}
      >{props.children}</div>
    );
  }

  return (
    <>{jsx}</>
  );
};

export default Btn;