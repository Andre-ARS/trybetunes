import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arstistName: '',
      disable: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.fetchArtist = this.fetchArtist.bind(this);
    this.albumRender = this.albumRender.bind(this);
  }

  onInputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
      disable: value.length < 2,
    });
  }

  fetchArtist() {
    const { arstistName } = this.state;
    this.setState({ loading: true, artist: arstistName }, async () => {
      const albumList = await searchAlbumsAPI(arstistName);

      this.setState({
        arstistName: '',
        disable: true,
        albuns: albumList.length > 0 ? albumList : 'not found',
        loading: false,
      });
    });
  }

  albumRender() {
    const { state: { loading, albuns, artist } } = this;
    if (loading && !albuns) {
      return <Loading />;
    }

    if (Array.isArray(albuns)) {
      const albumList = albuns
        .map(({ artistName, collectionId, collectionName, artworkUrl100 }) => (
          <Link
            to={ `/album/${collectionId}` }
            data-testid={ `link-to-album-${collectionId}` }
            key={ collectionId }
          >
            <img src={ artworkUrl100 } alt={ collectionName } />
            <h3>{ collectionName }</h3>
            <h4>{ artistName }</h4>
          </Link>
        ));
      return (
        <>
          <h2>{ `Resultado de álbuns de: ${artist}` }</h2>
          {albumList}
        </>
      );
    }

    if (albuns === 'not found') return <h2>Nenhum álbum foi encontrado</h2>;
  }

  render() {
    const { state: { arstistName, disable },
      onInputChange, fetchArtist, albumRender } = this;

    return (
      <div data-testid="page-search">
        <Header />
        <form className="SearchBar">
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
            onClick={ fetchArtist }
          >
            Pesquisar
          </button>
        </form>
        {albumRender()}
      </div>
    );
  }
}

export default Search;
