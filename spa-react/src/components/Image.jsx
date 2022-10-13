

const Image = (props) => {

  let cl = "";
  if (props.left === true) {
    cl = "image-left";
  }
  if (props.right === true) {
    cl = "image-right";
  }
  if (props.wide === true) {
    cl = "image-wide";
  }

  if (props.small === true) {
    // ako stavimo atribut small dobijam osliku siroku 200px
    cl += " small200";
  }

  if (props.small100 === true) {
    // ako stavimo atribut small dobijam osliku siroku 200px
    cl += " small100";
  }

  if (props.small150 === true) {
    // ako stavimo atribut small dobijam osliku siroku 200px
    cl += " small150";
  }

  let jsxCaption = null;
  if (typeof props.caption === 'string') {
    jsxCaption = (
      <figcaption>{props.caption}</figcaption>
    );
  }

  let alt = '';
  if (typeof props.alt === 'string') {
    alt = props.alt;
  }

  return (
    <figure className={cl}>
      <img src={props.src} alt={alt} />
      {jsxCaption}
    </figure>
  );
};

export default Image;