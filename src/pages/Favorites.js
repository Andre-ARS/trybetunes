import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

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
      return (favSongs
        .map(({ trackName, previewUrl, trackId }, index) => (
          <MusicCard
            name={ trackName }
            id={ trackId }
            url={ previewUrl }
            key={ trackName }
            event={ onInputChange }
            index={ index }
            favSongs={ favSongs }
          />))
      );
    }
  }

  render() {
    const { loading } = this.state;

    return (
      <div data-testid="page-favorites">
        <Header />
        <h2>Músicas Favoritas:</h2>
        { loading ? <Loading /> : this.renderTracks() }
      </div>
    );
  }
}

export default Favorites;
