import PropTypes from 'prop-types';
import defaultImage from './default.png';
import './Painting.css';

const Painting = ({ url, title, price, profileUrl, tag, quantity }) => {
  return (
    <div className="Painting">
      <img src={url} alt={title} width="350" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{tag}</a>
      </p>
      <p>Price: {price} credits</p>
      <p>Avaibility: {quantity < 10 ? 'Close to null' : 'Enough'}</p>
      <button>Add to cart</button>
    </div>
  );
};

Painting.defaultProps = {
  url: defaultImage,
  price: 123,
};

Painting.propTypes = {
  url: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string.isRequired,
};

export default Painting;
