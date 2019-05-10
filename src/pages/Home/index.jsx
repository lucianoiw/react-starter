import React from 'react';

import Button from '@Common/Button';
import ConnectedPokemonsList from '../../containers/PokemonsList';

const Home = () => (
  <>
    <ConnectedPokemonsList />

    <Button color="primary">Teste</Button>
    <Button color="secondary">Teste</Button>
    <Button color="danger">Teste</Button>
    <Button>Teste</Button>
  </>
);

export default Home;
