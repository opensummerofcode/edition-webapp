import PropTypes from 'prop-types';
import Link from 'next/link';
import ExternalLink from './ExternalLink';

const ButtonGroup = ({ children }) => {
  return <div className="button-group">{children}</div>;
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

const ButtonLink = ({
  className = '',
  children,
  disabled = false,
  isExternal = false,
  href,
  ...rest
}) => {
  let classNames = className ? ['button', className].join(' ') : 'button';
  if (disabled) classNames += ' disabled';
  return (
    <>
      {isExternal && (
        <ExternalLink href={href} className={classNames} {...rest}>
          {children}
        </ExternalLink>
      )}
      {!isExternal && (
        <Link href={href} className={classNames} {...rest}>
          {children}
        </Link>
      )}
    </>
  );
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  isExternal: PropTypes.bool,
  href: PropTypes.string.isRequired,
};

export { ButtonLink, ButtonGroup };
