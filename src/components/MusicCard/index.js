import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import style from './style.module.css';

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
    } else {
      this.setState({
        isChecked: false,
      });
    }
  }

  render() {
    const { props: {
      name,
      id,
      url,
      event,
      index,
      img }, state: { isChecked } } = this;

    return (
      <div key={ id } className={ style.card__container }>
        { img && <img src={ img } alt="" />}
        <p>{name}</p>
        <audio data-testid="audio-component" src={ url } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {'  '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ id } className={ style.favorite__check }>
          <input
            type="checkbox"
            id={ id }
            data-testid={ `checkbox-music-${id}` }
            onChange={ event }
            name={ index }
            checked={ isChecked }
          />
          { !isChecked ? <BsHeart /> : <BsHeartFill /> }
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
  img: PropTypes.string.isRequired,
};

export default MusicCard;
