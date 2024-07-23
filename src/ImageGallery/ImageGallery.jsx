const ImageGallery = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.urls.small} alt={item.alt_description} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
