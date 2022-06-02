import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';
import { BsHeart, BsHeartFill, BsPlayFill } from 'react-icons/bs';
import style from './style.module.css';

class MusicCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  componentDidMount() {
    this.getFav();
  }

  charCheck = (name) => {
    const LIMIT = 30;
    const THREE = 3;

    if (name && name.length > LIMIT) {
      return name.slice(0, LIMIT - THREE).concat('...');
    }
    return name;
  };

  getFav = () => {
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
  };

  render() {
    const {
      props: { name, id, event, index, img, selectMusic, track },
      state: { isChecked },
      charCheck,
    } = this;
    const textColor = track === index ? '#2CB67D' : '';
    const back = track === index ? '#222225' : '';

    return (
      <div
        key={ id }
        style={ { backgroundColor: back } }
        className={ style.card__container }
      >
        {img && <img src={ img } alt="" />}
        <button
          type="button"
          className={ style.play }
          onClick={ () => selectMusic(index) }
        >
          <BsPlayFill />
        </button>
        <p title={ name } style={ { color: textColor } }>
          {charCheck(name)}
        </p>
        <label htmlFor={ id } className={ style.favorite__check }>
          <input
            type="checkbox"
            id={ id }
            data-testid={ `checkbox-music-${id}` }
            onChange={ event }
            name={ index }
            checked={ isChecked }
          />
          {!isChecked ? <BsHeart /> : <BsHeartFill />}
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  event: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  favSongs: PropTypes.arrayOf(string).isRequired,
  img: PropTypes.string.isRequired,
  selectMusic: PropTypes.func.isRequired,
  track: PropTypes.number.isRequired,
};

export default MusicCard;
