import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoMdContact } from 'react-icons/io';
import Loading from '../../pages/Loading';
import { getUser } from '../../services/userAPI';
// import logo from '../../images/Logo_TrybeTunes.png';
import style from './style.module.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      image: '',
    };

    this.namefetch = this.namefetch.bind(this);
  }

  componentDidMount() {
    this.namefetch();
  }

  async namefetch() {
    const response = await getUser();

    this.setState({
      userName: response.name,
      image: response.image,
    });
  }

  render() {
    const { userName, image } = this.state;

    return (
      <header data-testid="header-component" className={ style.container }>
        <nav className={ style.header__navigation }>
          <Link data-testid="link-to-search" to="/search">Search</Link>
          <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
          <Link data-testid="link-to-profile" to="/profile">Profile</Link>
        </nav>
        {/* <div className={ style.select__page }>
          <div className={ style.left__square } />
          <div className={ style.page__change } />
          <div className={ style.right__square } />
        </div> */}
        {
          userName
            ? (
              <div className={ style.header__user }>
                { image
                  ? <img src={ image } alt="" />
                  : <p><IoMdContact /></p>}
                <span data-testid="header-user-name">{userName}</span>
              </div>
            )
            : (<Loading />)
        }
      </header>
    );
  }
}

export default Header;
