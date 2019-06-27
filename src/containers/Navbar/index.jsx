import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '@Ducks/account';

import Wrapper from '@Common/Wrapper';

import {
  NavbarWrapper,
} from './styles';

const Navbar = ({
  logged,
  logoutDispatch,
}) => (
  <Wrapper>
    <NavbarWrapper>
      NAVBAR
      {
        logged
          ? <button onClick={() => logoutDispatch()} type="button">Logout</button>
          : <Link to="/login">Login</Link>
      }
    </NavbarWrapper>
  </Wrapper>
);

const mapStateToProps = ({
  account,
}) => ({
  logged: account.logged,
});

export const mapDispatchToProps = dispatch => ({
  logoutDispatch: () => dispatch(logout()),
});

Navbar.propTypes = {
  logoutDispatch: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar));
