

const CoverImage = (props) => {

  let cl = "";

  return (
    <div className="cover-image">
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default CoverImage;