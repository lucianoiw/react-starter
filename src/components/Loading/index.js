import React from 'react';
import PropTypes from 'prop-types';

import nullablePropTypes from '@Utils/nullablePropTypes';

const Loading = ({
  error,
  timedOut,
}) => {
  if (error || timedOut) {
    return (
      <>
        Ocorreu um erro!
      </>
    );
  }

  return (
    <>
      Carregando...
    </>
  );
};

Loading.propTypes = {
  timedOut: PropTypes.bool.isRequired,
  error: nullablePropTypes(PropTypes.object).isRequired,
};

export default Loading;
