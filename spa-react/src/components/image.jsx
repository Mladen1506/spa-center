

const Image = (props) => {

  let cl = "";
  if (props.left === true) {
    cl = "image-left";
  }
  if (props.right === true) {
    cl = "image-right";
  }
  if (props.wide === true) {
    cl = "image-widet";
  }
  
  if (props.small === true) {
    cl += " small200";
  }

  let jsxCaption = null;
  if (typeof props.caption === 'string') {
    jsxCaption = (
      <figcaption>{props.caption}</figcaption>
    );
  }

  return (
    <figure className={cl}>
      <img src={props.src} alt={props.alt} />
      {jsxCaption}
    </figure>
  );
};

export default Image;