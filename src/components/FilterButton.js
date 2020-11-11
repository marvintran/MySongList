import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { BiX } from "react-icons/bi";

const FilterButton = ({ action, active, title, size, className, currentFilter }) => {
  let variant = "outline-primary";

  if(currentFilter) {
    return (
      <Button
        onClick={() => action(title)}
        variant={variant}
        active={active}
        size={size}
        className={className}
      >
        {title}<BiX/>
      </Button>
    )
  }

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
