import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Wrapper from '@Common/Wrapper';

import { login } from '@Ducks/account';

export class Login extends Component {
  componentDidUpdate() {
    const { logged, location, history } = this.props;
    const { from } = location.state || { from: { pathname: '/' } };

    if (logged) {
      history.push(from);
    }
  }

  handleLogin() {
    const { loginDispatch } = this.props;
    loginDispatch();
  }

  render() {
    const { logged } = this.props;

    if (logged) {
      return 'Tá logado!';
    }

    return (
      <Wrapper>
        <button type="button" onClick={() => this.handleLogin()}>Login</button>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({
  account,
}) => ({
  logged: account.logged,
});

export const mapDispatchToProps = dispatch => ({
  loginDispatch: () => dispatch(login()),
});

Login.propTypes = {
  loginDispatch: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login));
