import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  load as loadUserDetails,
  clear as clearUserDetails,
} from '@Ducks/userDetails';

class PokemonDetails extends Component {
  componentDidMount() {
    const { props } = this;

    props.loadUserDetails(props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    const { props } = this;

    if (prevProps.match.params.id !== props.match.params.id) {
      props.loadUserDetails(props.match.params.id);
    }
  }

  componentWillUnmount() {
    const { props } = this;
    props.clearUserDetails();
  }

  render() {
    const { props } = this;

    if (props.userDetailsLoading) {
      return <div>Carregando...</div>;
    }

    return (
      <>
        {props.userDetails && (
          <div>
            <h1>{props.userDetails.name}</h1>
            E-mail:
            {props.userDetails.email}

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
      id: PropTypes.string,
    }),
  }).isRequired,
  loadUserDetails: PropTypes.func.isRequired,
  clearUserDetails: PropTypes.func.isRequired,
  userDetails: PropTypes.object.isRequired,
  userDetailsLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  userDetails: state.userDetails.data,
  userDetailsLoading: state.userDetails.loading,
});

export const mapDispatchToProps = dispatch => ({
  loadUserDetails: slug => dispatch(loadUserDetails(slug)),
  clearUserDetails: () => dispatch(clearUserDetails()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonDetails);
