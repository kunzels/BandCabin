import React from 'react';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentTrack: {title: '', trackUrl: null}
    }
    this.playTrack = this.playTrack.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  playTrack(e) {
    let player = document.getElementById('musicplayer');
    let currentTrack = this.props.tracks[e.target.id];
    this.setState({currentTrack, playing: true}, () => {
      player.src = currentTrack.trackUrl;
      player.play();
    })
  }

  play() {
    let player = document.getElementById('musicplayer');
    this.setState({playing: true});
    player.play();
  }

  pause() {
    let player = document.getElementById('musicplayer');
    this.setState({ playing: false });
    player.pause();
  }

  render() {
    let currentTrackInfo;

    let button;

    if (this.state.playing) {
      button = <button onClick={this.pause}>Pause</button>
    } else {
      button = <button onClick={this.play}>Play</button>
    }


    if (this.state.currentTrack.title) {
      currentTrackInfo = <div>
        <h3>Now Playing</h3>
        {button}
        <h2>{this.state.currentTrack.title}</h2>
      </div>;
    }

    let trackInfo;

    if (this.props.tracks.length) {
      trackInfo = this.props.tracks.map((track, idx) => {
        return (<li key={idx}>
          <button onClick={this.playTrack} id={idx}>
            Play
          </button>
          <span>{track.title}</span>
        </li>)
      })
    }

    return (
      <div>
        {currentTrackInfo}
        <ul>
          {trackInfo}
        </ul>
        <audio
          src={this.state.currentTrack.trackUrl}
          autoPlay={this.state.playing}
          id="musicplayer"
          preload="none"
          type="audio/mp3">
        </audio>
      </div>
    )
  }
}


export default MusicPlayer;