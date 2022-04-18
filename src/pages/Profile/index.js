import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoMdContact } from 'react-icons/io';
import Header from '../../components/Header/index';
import { getUser } from '../../services/userAPI';
import Loading from '../Loading';
import style from './style.module.css';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: '',
    };

    this.fetchUser = this.fetchUser.bind(this);
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

  fetchUser() {
    this.setState({ loading: true }, async () => {
      const userData = await getUser();

      this.setState({
        profile: userData,
        loading: false,
      });
    });
  }

  renderProfileInfo = () => {
    const { profile } = this.state;
    const { name, image, description, email } = profile;
    return (
      <section className={ style.profile_info }>
        <div className={ style.img_wrapper }>
          { image
            ? <img src={ image } alt={ name } data-testid="profile-image" />
            : <IoMdContact className={ style.user_icon } /> }
          <Link to="/profile/edit">
            <button type="button">
              Editar perfil
            </button>
          </Link>
        </div>
        <div className={ style.infos }>
          <strong>Nome</strong>
          <p>{name}</p>
        </div>
        <div className={ style.infos }>
          <strong>E-mail</strong>
          <p>{email}</p>
        </div>
        <div className={ style.infos }>
          <strong>Descrição</strong>
          <p>{ description }</p>
        </div>
      </section>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div data-testid="page-profile" className={ style.profile_page }>
        <Header />
        <div className={ style.profile_container }>
          { loading ? <Loading />
            : (
              this.renderProfileInfo()
            ) }
        </div>
      </div>
    );
  }
}

export default Profile;
