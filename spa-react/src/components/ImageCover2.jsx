

const ImageCover2 = (props) => {

  let style = {
    backgroundImage: 'url("'+ props.src+'")' 
  };

  return (
    <div className="cover-image-2" style={style}></div>
  );
};

export default ImageCover2;