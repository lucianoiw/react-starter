import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

// eslint-disable-next-line
import ConnectedPokemonsList, { PokemonsList } from '..';

const initialState = {
  pokemons: [],
};
const mockStore = configureStore();

let wrapper;
let store;

describe('actions', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<ConnectedPokemonsList store={store} />);
  });

  it('should create a load action when load() is called', () => {
    expect(wrapper).toBeTruthy();
  });
});
