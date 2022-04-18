import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import Header from '../../components/Header/index';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import Loading from '../Loading';
import style from './style.module.css';

const ALBUM_LIMIT = 17;
const ALBUM_LAST_INDEX = 13;
const ARTIST_LIMIT = 13;
const ARTIST_LAST_INDEX = 9;
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

  componentDidMount() {
    this.handlePageSelector();
  }

  componentWillUnmount() {
    const search = document.querySelectorAll('a')[0];
    search.style.color = '#fffffe';
  }

  handlePageSelector = () => {
    const pageSelector = document.querySelector('.style_select__page__kfR-_');
    const search = document.querySelectorAll('a')[0];
    pageSelector.style.left = '0';
    search.style.color = '#16161A';
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
        .map(({ artistName, collectionId, collectionName, artworkUrl100 }) => {
          const albumName = collectionName.length <= ALBUM_LIMIT
            ? collectionName
            : collectionName.slice(0, ALBUM_LAST_INDEX).concat('...');
          const artists = artistName.length <= ARTIST_LIMIT
            ? artistName
            : artistName.slice(0, ARTIST_LAST_INDEX).concat('...');
          return (
            <Link
              to={ `/album/${collectionId}` }
              data-testid={ `link-to-album-${collectionId}` }
              key={ collectionId }
              className={ style.album__warapper }
            >
              <img src={ artworkUrl100 } alt={ collectionName } />
              <h3>{ albumName }</h3>
              <h4>{ artists }</h4>
            </Link>
          );
        });
      return (
        <>
          <h2
            className={ style.result__text }
          >
            { `Resultado de álbuns de: ${artist}` }
          </h2>
          <div className={ style.track__list }>
            {albumList}
          </div>
        </>
      );
    }

    if (albuns === 'not found') return <h2>Nenhum álbum foi encontrado</h2>;
  }

  render() {
    const { state: { arstistName, disable },
      onInputChange, fetchArtist, albumRender } = this;

    return (
      <div data-testid="page-search" className={ style.search__page }>
        <Header />
        <form className={ style.search__bar }>
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
            <AiOutlineSearch />
          </button>
        </form>
        {albumRender()}
      </div>
    );
  }
}

export default Search;
