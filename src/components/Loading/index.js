import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import style from './style.module.css';

class Loading extends Component {
  render() {
    const { status, redirect } = this.props;
    return (
      <section className={ style.loading }>
        { status ? <Redirect to={ redirect } /> : <p>Carregando...</p> }
      </section>
    );
  }
}

Loading.propTypes = {
  status: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
};

export default Loading;
