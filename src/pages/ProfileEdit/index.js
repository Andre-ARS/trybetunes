import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { IoMdContact } from 'react-icons/io';
import style from './style.module.css';
import Header from '../../components/Header/index';
import Loading from '../../components/Loading/index';
import { getUser, updateUser } from '../../services/userAPI';

class ProfileEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: '',
      disable: true,
      name: '',
      image: '',
      description: '',
      email: '',
    };

    this.fetchUser = this.fetchUser.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.saveValidation = this.saveValidation.bind(this);
    this.setValue = this.setValue.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  componentDidMount() {
    this.fetchUser();
    this.handlePageSelector();
  }

  componentWillUnmount() {
    const profile = document.querySelectorAll('a')[2];
    profile.style.color = '#fffffe';
  }

  handlePageSelector = () => {
    const pageSelector = document.querySelector('.style_select__page__kfR-_');
    const profile = document.querySelectorAll('a')[2];
    pageSelector.style.left = '266.5px';
    profile.style.color = '#16161A';
  }

  onInputChange({ target: { name, value } }) {
    this.setState(
      {
        [name]: value,
      },
      () => this.saveValidation(),
    );
  }

  setValue() {
    const { profile } = this.state;
    const { name, image, description, email } = profile;

    this.setState(
      {
        name,
        image,
        description,
        email,
      },
      () => this.saveValidation(),
    );
  }

  editForm = () => {
    const {
      state: { disable, name, image, description, email, redirect },
      onInputChange,
      saveUser,
    } = this;

    return (
      <div className={ style.form_container }>
        <form className={ style.form }>
          <div className={ style.img_selector }>
            { image ? <img src={ image } alt={ name } />
              : <IoMdContact /> }
            <input
              type="text"
              name="image"
              id="image"
              placeholder="Insira um link"
              data-testid="edit-input-image"
              value={ image }
              onChange={ onInputChange }
            />
          </div>
          <label htmlFor="name">
            <p>Nome</p>
            <input
              type="text"
              data-testid="edit-input-name"
              name="name"
              id="name"
              value={ name }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="email">
            <p>E-mail</p>
            <input
              type="email"
              data-testid="edit-input-email"
              name="email"
              id="email"
              value={ email }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description">
            <p>Descrição</p>
            <textarea
              cols="30"
              rows="10"
              data-testid="edit-input-description"
              id="description"
              name="description"
              value={ description }
              onChange={ onInputChange }
            />
          </label>
          <button
            disabled={ disable }
            data-testid="edit-button-save"
            type="button"
            onClick={ saveUser }
          >
            Salvar
          </button>
        </form>
        {redirect && <Redirect to="/profile" />}
      </div>
    );
  };

  saveValidation() {
    const { name, image, description, email } = this.state;
    const emailPattern = /\S+@\S+\.\S+/;
    /* peguei essa regex de validação de email na segunda resposta dessa pergunta no StackOverflow
    https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript//S+@/S+/S+/ */
    const emailIsValid = emailPattern.test(email);

    if (name && image && description && emailIsValid) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  }

  fetchUser() {
    this.setState({ loading: true }, async () => {
      const userData = await getUser();

      this.setState(
        {
          profile: userData,
          loading: false,
        },
        () => this.setValue(),
      );
    });
  }

  async saveUser() {
    const { name, image, description, email } = this.state;
    const {
      history: { push },
    } = this.props;
    const profileData = {
      name,
      image,
      description,
      email,
    };
    push('/profile');
    await updateUser(profileData);
  }

  render() {
    const { loading } = this.state;

    return (
      <div data-testid="page-profile-edit" className={ style.profile_page }>
        <Header />
        {loading ? <Loading /> : this.editForm()}
      </div>
    );
  }
}

ProfileEdit.defaultProps = {
  history: undefined,
};

ProfileEdit.propTypes = {
  history: PropTypes.shape(),
};

export default ProfileEdit;
