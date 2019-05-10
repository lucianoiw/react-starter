import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  load as loadPokemonDetails,
  clear as clearPokemonDetails,
} from '../../redux-flow/ducks/pokemonDetails';

class PokemonDetails extends Component {
  componentDidMount() {
    const { props } = this;
    props.loadPokemonDetails(props.match.params.slug);
  }

  componentDidUpdate(prevProps) {
    const { props } = this;

    if (prevProps.match.params.slug !== props.match.params.slug) {
      props.loadPokemonDetails(props.match.params.slug);
    }
  }

  componentWillUnmount() {
    const { props } = this;
    props.clearPokemonDetails();
  }

  render() {
    const { props } = this;

    if (props.pokemonDetailsLoading) {
      return <div>Loading...</div>;
    }

    return (
      <>
        {props.pokemonDetails && (
          <div>
            <h1>{props.pokemonDetails.name}</h1>

            {props.pokemonDetails.sprites
              && Object.entries(props.pokemonDetails.sprites).map(([size, url]) => (
                <div key={size}>
                  <img src={url} alt={size} />
                </div>
              ))}

            <hr />

            <NavLink to="/">Back to list</NavLink>
          </div>
        )}
      </>
    );
  }
}

PokemonDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
  loadPokemonDetails: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pokemonDetails: state.pokemonDetails.data,
  pokemonDetailsLoading: state.pokemonDetails.loading,
});

export const mapDispatchToProps = dispatch => ({
  loadPokemonDetails: slug => dispatch(loadPokemonDetails(slug)),
  clearPokemonDetails: () => dispatch(clearPokemonDetails()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonDetails);
