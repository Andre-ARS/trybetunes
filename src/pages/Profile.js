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

  render() {
    const { profile, loading } = this.state;
    const { name, image, description, email } = profile;

    return (
      <div data-testid="page-profile">
        <Header />
        { loading ? <Loading />
          : (
            <section>
              <img src={ image } alt={ name } data-testid="profile-image" />
              <Link to="/profile/edit">Editar perfil</Link>
              <p>
                Nome
                <br />
                <span>{name}</span>
              </p>
              <p>
                E-mail
                <br />
                <span>{ email }</span>
              </p>
              <p>
                Descrição
                <br />
                <span>{ description }</span>
              </p>
            </section>
          ) }
      </div>
    );
  }
}

export default Profile;
