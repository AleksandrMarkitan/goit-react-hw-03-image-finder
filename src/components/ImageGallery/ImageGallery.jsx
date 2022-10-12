// import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import { DeleteButton } from '../Button/Button';
import s from './ImageGallery.module.scss';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image.webformatURL} />
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   filter: PropTypes.string.isRequired,
//   contactDelete: PropTypes.func.isRequired,
// };
