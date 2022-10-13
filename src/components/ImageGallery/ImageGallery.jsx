// import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import { ButtonLoader } from '../Button/Button';
import s from './ImageGallery.module.scss';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.ImageGallery} onClick={e => openModal(e)}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image.webformatURL}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   filter: PropTypes.string.isRequired,
//   contactDelete: PropTypes.func.isRequired,
// };
