import React, { Component } from 'react';
import {
  BsFillPlayCircleFill,
  BsPauseCircleFill,
  BsHeart,
  BsHeartFill,
  BsFillSkipEndFill,
  BsFillSkipStartFill,
} from 'react-icons/bs';
import PropTypes from 'prop-types';
import style from './style.module.css';
import './style.scss';

const ONE_MINUTE = 60;
const MIN_SECS = 10;
const CURRENT_TIME = '0:00';
export default class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: true,
      progress: 0,
      currentTime: CURRENT_TIME,
    };
  }

  timeChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => {
      const player = document.querySelector('#aud');

      player.currentTime = (player.duration * value) / 100;
    });
  };

  setDuration = (duration) => {
    console.log(duration);
  };

  playMusic = () => {
    const player = document.querySelector('#aud');
    this.setState(({ play }) => ({ play: !play }));
    const { play } = this.state;
    const controls = play ? player.play() : player.pause();
    this.setDuration(Math.floor(player.duration));

    return controls;
  };

  getTime = (sec) => {
    console.log(sec);
    const minutes = Math.floor(sec / ONE_MINUTE);
    const seconds = Math.floor(sec % ONE_MINUTE);
    const checkSeconds = seconds < MIN_SECS ? `0${seconds}` : seconds;

    return `${minutes}:${checkSeconds}`;
  };

  switchMusic = (callBack) => {
    const player = document.querySelector('#aud');

    callBack(player);
    this.setState({ play: false });
    this.setDuration(Math.floor(player.duration));
  };

  progressUpdate = ({ target }) => {
    const { currentTime, duration } = target;

    this.setState({
      progress: (currentTime / duration) * 100,
      currentTime: this.getTime(currentTime),
    });
  }

  render() {
    const {
      state: { play, progress, currentTime },
      props: { trackList, isChecked, track, event, nextSong, prevSong },
      timeChange,
      playMusic,
      switchMusic,
      progressUpdate,
    } = this;

    return (
      <div className={ style.player }>
        {trackList && (
          <>
            <div className={ style.music_info }>
              <img
                src={ trackList[track].artworkUrl100 }
                alt=""
                className={ style.album_img }
              />
              <div>
                <p className={ style.track }>{trackList[track].trackName}</p>
                <p className={ style.artist }>{trackList[track].artistName}</p>
              </div>
              <label htmlFor="fav" className={ style.favorite__check }>
                <input
                  type="checkbox"
                  id="fav"
                  name={ track }
                  checked={ isChecked }
                  onChange={ event }
                />
                {!isChecked ? <BsHeart /> : <BsHeartFill />}
              </label>
              {' '}
            </div>
            <audio
              data-testid="audio-component"
              id="aud"
              className={ style.audio }
              src={ trackList[track].previewUrl }
              controls
              onEnded={ () => switchMusic(nextSong) }
              onTimeUpdate={ progressUpdate }
            >
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {'  '}
              <code>audio</code>
              .
            </audio>
          </>
        )}
        <section className={ style.progress_container }>
          <div className={ style.player_controls }>
            <button
              type="button"
              className={ style.controls }
              onClick={ () => switchMusic(prevSong) }
            >
              <BsFillSkipStartFill />
            </button>
            <button
              type="button"
              className={ `${style.play} ${style.controls}` }
              onClick={ playMusic }
            >
              {play ? <BsFillPlayCircleFill /> : <BsPauseCircleFill />}
            </button>
            <button
              type="button"
              name="next"
              className={ style.controls }
              onClick={ () => switchMusic(nextSong) }
            >
              <BsFillSkipEndFill />
            </button>
          </div>
          <div className={ style.progress }>
            <p className={ style.current_time }>{ currentTime }</p>
            <div className={ style.progress_bar }>
              <input
                type="range"
                name="progress"
                max="100"
                value={ progress }
                onInput={ timeChange }
              />
              <div className={ style.thumb } style={ { width: `${progress}%` } } />
            </div>
            <p className={ style.total_time }>0:29</p>
          </div>
        </section>
      </div>
    );
  }
}

AudioPlayer.propTypes = {
  trackList: PropTypes.arrayOf(),
}.isRequired;
