import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: OriginalComponent, logged, ...rest }) => {
  const { pathname: currentLocation } = rest.location;

  return (
    <Route
      {...rest}
      render={props => (
        logged
          ? <OriginalComponent {...props} />
          : (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: currentLocation,
                },
              }}
            />
          )
      )}
    />
  );
};

const mapStateToProps = ({
  account,
}) => ({
  logged: account.logged,
});

export const mapDispatchToProps = () => ({});

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRoute));


/*

const isAuthenticated = false;

class PrivateRoute extends  {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: true,
    };
  }

  componentDidMount() {
    this.checkIsLogged();
  }

  checkIsLogged() {
    const { isLogged } = this.state;
    console.log('isLogged', isLogged);
  }

  render() {


    return (

    );
  }
}

PrivateRoute.propTypes = {

};

export default withRouter(PrivateRoute);

// https://stackoverflow.com/questions/44649665/redirect-user-to-intended-url-after-login-reactjs

*/
