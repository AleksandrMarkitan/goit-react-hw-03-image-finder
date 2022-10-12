// import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.scss';

export const ImageGalleryItem = ({ image }, key) => {
  return (
    <li key={key} className={s.GalleryItem}>
      <img className={s.GalleryItemImage} src={image} alt="" />
    </li>
  );
};

// Contact.propTypes = {
//   contact: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }).isRequired,
// };
