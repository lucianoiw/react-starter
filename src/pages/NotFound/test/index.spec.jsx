import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import NotFoundPage from '../index';

describe('NotFoundPage', () => {
  const initialState = {};

  const mockStore = configureStore();
  let store;
  let container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = mount(<NotFoundPage store={store} />);
  });

  it('Should render correctly', () => {
    expect(container).toBeTruthy();
  });
});
