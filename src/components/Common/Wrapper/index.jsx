import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Box } from './styles';

const Wrapper = ({ children, theme }) => {
  const {
    xs, sm, md, lg, xl,
  } = theme.maxWidths;

  return (
    <Box
      maxWidth={{
        xs,
        sm,
        md,
        lg,
        xl,
      }}
    >
      {children}
    </Box>
  );
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme(Wrapper);
