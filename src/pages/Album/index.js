import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../../components/Header/index';
import MusicCard from '../../components/MusicCard/index';
import { addSong, getFavoriteSongs, removeSong } from '../../services/favoriteSongsAPI';
import getMusics from '../../services/musicsAPI';
import Loading from '../Loading';
import style from './style.module.css';

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artistName: '',
      favSongs: JSON.parse(localStorage.getItem('favorite_songs')),
    };

    this.musicFetch = this.musicFetch.bind(this);
    this.renderTracks = this.renderTracks.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.fetchFav = this.fetchFav.bind(this);
  }

  componentDidMount() {
    this.musicFetch();
    this.fetchFav();
    // this.handlePageSelector();
  }

  // componentWillUnmount() {
  //   const search = document.querySelectorAll('a')[0];
  //   search.style.color = '#fffffe';
  //   console.log(search);
  // }

  // handlePageSelector = () => {
  //   const pageSelector = document.querySelector('.style_select__page__kfR-_');
  //   const search = document.querySelectorAll('a')[0];
  //   pageSelector.style.left = '0';
  //   search.style.color = '#16161A';
  // }

  onInputChange({ target }) {
    const { name, checked } = target;
    this.setState({ loading: true }, async () => {
      const { trackList } = this.state;

      if (!checked) {
        await removeSong(trackList[name]);
      } else {
        await addSong(trackList[name]);
      }
      this.setState({
        loading: false,
        favSongs: JSON.parse(localStorage.getItem('favorite_songs')),
      });
    });
  }

  async fetchFav() {
    const favs = await getFavoriteSongs();
    return favs;
  }

  async musicFetch() {
    const { match: { params: { id } } } = this.props;
    const musics = await getMusics(id);

    this.setState({
      trackList: musics,
      artistName: musics[0].artistName,
      albumName: musics[0].collectionName,
      album: musics[0].artworkUrl100,
    });
  }

  renderTracks() {
    const { state: { trackList, favSongs }, onInputChange } = this;

    if (trackList) {
      return (trackList
        .map(({ trackName, previewUrl, trackId }, index) => (
          index !== 0
          && <MusicCard
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
    const { state: { artistName, albumName, album, loading } } = this;

    return (
      <main data-testid="page-album" className={ style.album__page }>
        <Header />
        <section className={ style.album__container }>
          <div className={ style.album__info }>
            <img src={ album } alt={ albumName } />
            <h2 data-testid="album-name">{albumName}</h2>
            <h3 data-testid="artist-name">{artistName}</h3>
          </div>
          <div className={ style.track__list }>
            {loading ? <Loading /> : this.renderTracks()}
          </div>
        </section>
      </main>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
