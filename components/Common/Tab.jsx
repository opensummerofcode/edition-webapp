import PropTypes from 'prop-types';

const Tab = ({ activeTab, label, onClick, style = {}, className = '' }) => {
  function handleClick() {
    onClick(label);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      onClick(label);
    }
  }

  let classNames = className;
  if (activeTab === label) {
    classNames = `${className} is-active`;
  }
  const stl = { ...style, cursor: 'pointer' };
  return (
    <li
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={classNames}
      style={stl}
      role="tab"
    >
      <h2>
        <a tabIndex="0" href={`#${label}`}>
          {label}
        </a>
      </h2>
    </li>
  );
};

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.instanceOf(Object),
  className: PropTypes.string,
};

export default Tab;
