import React, { Component } from 'react';
import Header from '../../components/Header/index';
import MusicCard from '../../components/MusicCard/index';
import { getFavoriteSongs, removeSong } from '../../services/favoriteSongsAPI';
import Loading from '../../components/Loading/index';
import style from './style.module.css';
import AudioPlayer from '../../components/AudioPlayer';

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favSongs: '',
      track: 0,
      isChecked: true,
      play: true,
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
  };

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

  nextSong = (player) => {
    const {
      state: { track, favSongs },
    } = this;

    if (track !== favSongs.length - 1) {
      this.setState({ track: track + 1 }, () => {
        player.play();
        this.fetchFavorites();
      });
    } else {
      this.setState({ track: 0 }, () => {
        player.play();
        this.fetchFavorites();
      });
    }
  };

  prevSong = (player) => {
    const {
      state: { track, favSongs },
    } = this;

    if (track > 0) {
      this.setState({ track: track - 1 }, () => {
        player.play();
        this.fetchFavorites();
      });
    } else {
      this.setState({ track: favSongs.length - 1 }, () => {
        player.play();
        this.fetchFavorites();
      });
    }
  };

  selectMusic = (i) => {
    const player = document.querySelector('#aud');

    this.setState({ track: i, play: false }, () => player.play());
  };

  setPlay = (bool) => {
    if (bool !== undefined) {
      this.setState({ play: bool });
    } else {
      this.setState(({ play }) => ({ play: !play }));
    }
  };

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
    const {
      state: { favSongs, track },
      onInputChange,
      selectMusic,
    } = this;

    if (favSongs) {
      return favSongs.map(
        ({ trackName, previewUrl, trackId, artworkUrl100 }, index) => (
          <MusicCard
            name={ trackName }
            id={ trackId }
            url={ previewUrl }
            key={ trackName }
            event={ onInputChange }
            index={ index }
            favSongs={ favSongs }
            img={ artworkUrl100 }
            selectMusic={ selectMusic }
            track={ track }
          />
        ),
      );
    }
  }

  render() {
    const {
      state: { loading, favSongs, track, isChecked, play },
      onInputChange,
      setPlay,
      prevSong,
      nextSong,
    } = this;
    console.log(favSongs);
    return (
      <div data-testid="page-favorites" className={ style.fav_page }>
        <Header />
        <h2>Músicas Favoritas:</h2>
        <div className={ style.favorite_container }>
          <div className={ style.favorite__tracks }>
            {loading ? <Loading /> : this.renderTracks()}
          </div>
        </div>
        {favSongs.length > 0 && (
          <AudioPlayer
            trackList={ favSongs }
            track={ track }
            isChecked={ isChecked }
            event={ onInputChange }
            play={ play }
            nextSong={ nextSong }
            prevSong={ prevSong }
            setPlay={ setPlay }
          />
        )}
      </div>
    );
  }
}

export default Favorites;
