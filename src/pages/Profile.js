import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

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
    const buttonText = 'Editar perfil';
    return (
      <section>
        <img src={ image } alt={ name } data-testid="profile-image" />
        <p>{name}</p>
        <p>{email}</p>
        <p>{ description }</p>
        <Link to="/profile/edit">
          <button type="button">
            { buttonText }
          </button>
        </Link>
      </section>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div data-testid="page-profile">
        <Header />
        <p>Editar perfil</p>
        { loading ? <Loading />
          : (
            this.renderProfileInfo()
          ) }
      </div>
    );
  }
}

export default Profile;
