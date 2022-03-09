import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';

class MusicCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  componentDidMount() {
    const { favSongs, id } = this.props;
    const songs = favSongs;
    if (songs.some(({ trackId }) => trackId === id)) {
      this.setState({
        isChecked: true,
      });
    }
  }

  render() {
    const { props: { name, id, url, event, index }, state: { isChecked } } = this;

    return (
      <div key={ id }>
        <p>{name}</p>
        <audio data-testid="audio-component" src={ url } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {'  '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ id }>
          <input
            type="checkbox"
            id={ id }
            data-testid={ `checkbox-music-${id}` }
            onChange={ event }
            name={ index }
            checked={ isChecked }
          />
          Favorita
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  favSongs: PropTypes.arrayOf(string).isRequired,
};

export default MusicCard;
