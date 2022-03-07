import React, { Component } from 'react';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
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
    });
  }

  render() {
    const { userName } = this.state;

    return (
      <header data-testid="header-component">
        <h1>TrybeTunes</h1>
        {
          userName
            ? (<span data-testid="header-user-name">{userName}</span>)
            : (<Loading />)
        }

      </header>
    );
  }
}

export default Header;
