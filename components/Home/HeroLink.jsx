import Link from 'next/link';
import PropTypes from 'prop-types';

const HeroLink = ({ href, name }) => {
  return (
    <div className="small-12 medium-4 large-4 cell">
      <h2 className="h3">
        <Link href={href}>{name}</Link>
      </h2>
    </div>
  );
};

HeroLink.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default HeroLink;
