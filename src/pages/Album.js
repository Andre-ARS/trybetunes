import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artistName: '',
    };

    this.musicFetch = this.musicFetch.bind(this);
    this.renderTracks = this.renderTracks.bind(this);
  }

  componentDidMount() {
    this.musicFetch();
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
    const { trackList } = this.state;

    if (trackList) {
      return (trackList
        .map(({ trackName, previewUrl, trackId }, index) => (
          index !== 0
          && <MusicCard
            name={ trackName }
            id={ trackId }
            url={ previewUrl }
            key={ trackName }
          />))
      );
    }
  }

  render() {
    const { state: { artistName, albumName, album } } = this;

    return (
      <div data-testid="page-album">
        <Header />
        <div>
          <img src={ album } alt="" />
          <h2 data-testid="album-name">{albumName}</h2>
          <h3 data-testid="artist-name">{artistName}</h3>
        </div>
        <div>
          {this.renderTracks()}
        </div>
      </div>
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
