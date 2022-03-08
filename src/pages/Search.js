import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arstistName: '',
      disable: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
      disable: value.length < 2,
    });
  }

  render() {
    const { state: { arstistName, disable }, onInputChange } = this;
    return (
      <div data-testid="page-search">
        <Header />
        <div className="SearchBar">
          <input
            type="text"
            data-testid="search-artist-input"
            name="arstistName"
            value={ arstistName }
            onChange={ onInputChange }
          />
          <button
            disabled={ disable }
            type="button"
            data-testid="search-artist-button"
          >
            Pesquisar

          </button>
        </div>
      </div>
    );
  }
}

export default Search;
