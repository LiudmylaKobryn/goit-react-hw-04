import s from "./ImageCard.module.css";

const ImageCard = ({ url, description, onClick }) => {
  return (
    <div className={s.ImageCard} onClick={onClick}>
      <img src={url} alt={description} />
    </div>
  );
};

export default ImageCard;
