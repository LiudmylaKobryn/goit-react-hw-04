import s from "./ImageCard.module.css";
const ImageCard = ({ url, description }) => {
  return (
    <div>
      <li className={s.ImageCard}>
        <img src={url} alt={description} />
      </li>
    </div>
  );
};

export default ImageCard;
