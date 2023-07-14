function ImageGalleryItem({
  id,
  tags,
  webformatURL,
  largeImageURL,
  onOpenModal,
}) {
  return (
    <li key={id} className="gallery-item">
      <img
        src={webformatURL}
        alt={tags}
        width={300}
        onClick={() => {
          onOpenModal({ id, tags, largeImageURL });
        }}
      />
    </li>
  );
}
export default ImageGalleryItem;
