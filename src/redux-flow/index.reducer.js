import { combineReducers } from 'redux';

import pokemons from './ducks/pokemons';
import pokemonDetails from './ducks/pokemonDetails';

const reducers = combineReducers({
  pokemons,
  pokemonDetails,
});

export default reducers;
