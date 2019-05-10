import React from 'react';
import PropTypes from 'prop-types';

import { Tag } from './styles';

const Button = ({ color, children }, ...otherProps) => (
  <Tag color={color} {...otherProps}>
    {children}
  </Tag>
);

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Button.defaultProps = {
  color: 'default',
};

export default Button;
