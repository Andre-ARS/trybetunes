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
    return (
      <section>
        <img src={ image } alt={ name } data-testid="profile-image" />
        <Link to="/profile/edit">
          <button type="button">
            Editar perfil
          </button>
        </Link>
        <p>{name}</p>
        <p>{email}</p>
        <p>{ description }</p>
      </section>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div data-testid="page-profile">
        <Header />
        { loading ? <Loading />
          : (
            this.renderProfileInfo()
          ) }
      </div>
    );
  }
}

export default Profile;
