import React, { Component } from 'react';
import { BsPerson } from 'react-icons/bs';
import { createUser } from '../../services/userAPI';
import Loading from '../Loading';
import styles from './style.module.css';
import playerDraw from '../../images/audio__player.svg';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnDisable: true,
      name: '',
      loading: false,
      status: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  onInputChange({ target }) {
    const minCaracters = 3;
    const { name, value } = target;

    this.setState({
      btnDisable: value.length < minCaracters,
      [name]: value,
    });
  }

  async addUser() {
    this.setState({
      loading: true,
    });

    const { name: nome } = this.state;
    const response = await createUser({ name: nome });

    this.setState({
      status: response,
    });
  }

  render() {
    const { state: {
      btnDisable,
      name,
      loading,
      status }, onInputChange, addUser } = this;

    if (loading) return <Loading status={ status } redirect="/search" />;

    return (
      <div data-testid="page-login" className={ styles.container }>
        <img src={ playerDraw } alt="" />
        <form className={ styles.login__form }>
          <h1>LogIn</h1>
          <BsPerson className={ styles.person } />
          <input
            type="text"
            data-testid="login-name-input"
            name="name"
            id="nameInput"
            placeholder="Nome"
            value={ name }
            onChange={ onInputChange }
            className={ styles.input }
          />
          <button
            disabled={ btnDisable }
            type="button"
            data-testid="login-submit-button"
            onClick={ addUser }
          >
            Entrar

          </button>
        </form>
      </div>
    );
  }
}

export default Login;
