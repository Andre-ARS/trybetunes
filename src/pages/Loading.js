import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class Loading extends Component {
  render() {
    const { status } = this.props;
    return (
      status ? <Redirect to="/search" /> : <p>Carregando...</p>
    );
  }
}

Loading.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Loading;
