import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const FilterButton = ({ action, active, title, size, className }) => {
  let variant = "outline-primary";
  return (
    <Button
      onClick={() => action(title)}
      variant={variant}
      active={active}
      size={size}
      className={className}
    >
      {title}
    </Button>
  )
}

FilterButton.propTypes = {
  action: PropTypes.func,
  active: PropTypes.func,
  title: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default FilterButton;
