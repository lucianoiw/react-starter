import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../index';

it('snapshot loading', () => {
  const props = {
    isLoading: true,
    error: null,
    timedOut: false,
  };

  const rendered = shallow(<Loading {...props} />);
  expect(rendered).toMatchSnapshot();
});

it('snapshot error', () => {
  const props = {
    isLoading: false,
    error: {
      error: true,
    },
    timedOut: false,
  };

  const rendered = shallow(<Loading {...props} />);
  expect(rendered).toMatchSnapshot();
});

it('snapshot timeout', () => {
  const props = {
    isLoading: false,
    error: null,
    timedOut: true,
  };

  const rendered = shallow(<Loading {...props} />);
  expect(rendered).toMatchSnapshot();
});
