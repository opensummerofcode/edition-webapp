import PropTypes from 'prop-types';

const Gallery = ({ className = '', children, modifier = '' }) => {
  const classNames = ['u-padding-x-large--tb', className].join(' ');
  return (
    <div className={classNames}>
      <div className={`grid-x grid-padding-x ${modifier}`}>{children}</div>
    </div>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  modifier: PropTypes.string,
};

export default Gallery;
