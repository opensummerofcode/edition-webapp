import PropTypes from 'prop-types';
import ExternalLink from './ExternalLink';

const DemoDayLink = ({ className = '', children: text }) => {
  return (
    <ExternalLink
      href="https://www.eventbrite.com/e/demoday-osoc-2024-tickets-933379492187"
      className={className}
      target="_blank"
    >
      {text}
    </ExternalLink>
  );
};

DemoDayLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default DemoDayLink;
