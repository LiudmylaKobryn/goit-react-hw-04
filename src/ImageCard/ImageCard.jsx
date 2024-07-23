const ImageCard = ({ url, description }) => {
  return (
    <div>
      <img src={url} alt={description} />
      <h3>{description}</h3>
    </div>
  );
};

export default ImageCard;
