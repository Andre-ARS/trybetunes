import React, { Component } from 'react';
import Header from '../../components/Header/index';
import MusicCard from '../../components/MusicCard/index';
import { getFavoriteSongs, removeSong } from '../../services/favoriteSongsAPI';
import Loading from '../../components/Loading/index';
import style from './style.module.css';

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favSongs: '',
    };

    this.fetchFavorites = this.fetchFavorites.bind(this);
    this.renderTracks = this.renderTracks.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {
    this.fetchFavorites();
    this.handlePageSelector();
  }

  componentWillUnmount() {
    const favorites = document.querySelectorAll('a')[1];
    favorites.style.color = '#fffffe';
  }

  handlePageSelector = () => {
    const pageSelector = document.querySelector('.style_select__page__kfR-_');
    const favorites = document.querySelectorAll('a')[1];
    pageSelector.style.left = '133px';
    favorites.style.color = '#16161A';
  }

  onInputChange({ target }) {
    const { name } = target;
    this.setState({ loading: true }, async () => {
      const { favSongs } = this.state;

      await removeSong(favSongs[name]);

      this.setState({
        loading: false,
        favSongs: JSON.parse(localStorage.getItem('favorite_songs')),
      });
    });
  }

  fetchFavorites() {
    this.setState({ loading: true }, async () => {
      const songs = await getFavoriteSongs();

      this.setState({
        favSongs: songs,
        loading: false,
      });
    });
  }

  renderTracks() {
    const { state: { favSongs }, onInputChange } = this;

    if (favSongs) {
      return (
        <div className={ style.track_list }>
          { favSongs
            .map(({ trackName, previewUrl, trackId, artworkUrl100 }, index) => (
              <MusicCard
                name={ trackName }
                id={ trackId }
                url={ previewUrl }
                key={ trackName }
                event={ onInputChange }
                index={ index }
                favSongs={ favSongs }
                img={ artworkUrl100 }
              />))}
        </div>
      );
    }
  }

  render() {
    const { loading } = this.state;

    return (
      <div data-testid="page-favorites" className={ style.fav_page }>
        <Header />
        <h2>Músicas Favoritas:</h2>
        <div className={ style.favorite_container }>
          { loading ? <Loading /> : this.renderTracks() }
        </div>
      </div>
    );
  }
}

export default Favorites;
