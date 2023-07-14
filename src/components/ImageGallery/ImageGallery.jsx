import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryCont } from './ImageGalleryStyled';

function ImageGallery({ images, onOpenModal }) {
  return (
    <ImageGalleryCont>
      {images?.length > 0 &&
        images.map(({ id, tags, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              tags={tags}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onOpenModal={onOpenModal}
            />
          );
        })}
    </ImageGalleryCont>
  );
}
export default ImageGallery;
