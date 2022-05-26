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
      props: { name, id, event, index, img, selectMusic },
      state: { isChecked },
    } = this;

    return (
      <div key={ id } className={ style.card__container }>
        {img && <img src={ img } alt="" />}
        <button
          type="button"
          className={ style.play }
          onClick={ () => selectMusic(index) }
        >
          <BsPlayFill />
        </button>
        <p>{name}</p>
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
};

export default MusicCard;
