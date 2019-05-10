import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Wrapper from '@Common/Wrapper';

import { load as loadPokemons } from '../../redux-flow/ducks/pokemons';

export class PokemonsList extends Component {
  componentDidMount() {
    const { props } = this;
    props.loadPokemons();
  }

  render() {
    const { props } = this;

    return (
      <Wrapper>
        {props.pokemons.map(item => (
          <div key={item.name}>
            <NavLink to={`/${item.name}`}>{item.name}</NavLink>
          </div>
        ))}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemons.data,
});

export const mapDispatchToProps = dispatch => ({
  loadPokemons: () => dispatch(loadPokemons()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonsList);
