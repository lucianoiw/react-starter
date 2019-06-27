import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Wrapper from '@Common/Wrapper';

import { load as loadUsers } from '@Ducks/users';

export class PokemonsList extends Component {
  componentDidMount() {
    const { props } = this;
    props.loadUsersDispatch();
  }

  render() {
    const { users, usersLoading } = this.props;

    if (usersLoading) {
      return 'Carregando...';
    }

    return (
      <Wrapper>
        {users.map(item => (
          <div key={item.name}>
            <NavLink to={`/users/${item.id}`}>{item.name}</NavLink>
          </div>
        ))}
      </Wrapper>
    );
  }
}

const mapStateToProps = ({
  users,
}) => ({
  users: users.data,
  usersLoading: users.loading,
});

export const mapDispatchToProps = dispatch => ({
  loadUsersDispatch: () => dispatch(loadUsers()),
});

PokemonsList.propTypes = {
  loadUsersDispatch: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  usersLoading: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonsList);
