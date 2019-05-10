import React from 'react';
import TestRenderer from 'react-test-renderer';

import Wrapper from '../index';

const renderJSON = el => TestRenderer.create(el).toJSON();

describe('Wrapper', () => {
  test('renders', () => {
    const json = renderJSON(<Wrapper />);
    expect(json.type).toBe('div');
  });
});
