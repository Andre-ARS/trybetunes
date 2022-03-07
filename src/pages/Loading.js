import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Loading extends Component {
  render() {
    const { status, redirect } = this.props;
    return (
      status ? <Redirect to={ redirect } /> : <p>Carregando...</p>
    );
  }
}

Loading.propTypes = {
  status: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
};

export default Loading;
