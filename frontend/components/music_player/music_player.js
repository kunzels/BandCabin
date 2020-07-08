import React from 'react';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentTrack: {title: '', trackUrl: null},
      cursorPosition: 0,
    }
  

    this.playTrack = this.playTrack.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.setCursorPosition = this.setCursorPosition.bind(this);
    this.changeCursorPosition = this.changeCursorPosition.bind(this);

  }

  componentDidMount() {
    this.positionInterval = setInterval(() => {
      this.setCursorPosition();
    }, 100);
  }


  componentWillUnmount() {
    clearInterval(this.positionInterval);
  }

  setCursorPosition() { 
        if (this.state.playing) {
            let player = document.getElementById('musicplayer');
            let pos = Math.round(player.currentTime / player.duration * 1000);
            this.setState({
                cursorPosition: pos
            })
        }
    }

    changeCursorPosition(e){
      debugger;
      let player = document.getElementById('musicplayer');
      if(!player || !player.currentTime) return;
      let duration = player.duration;
      let pos = e.target.value;
      debugger;
      let currentTime = duration * (pos / 1000);
      this.setState({cursorPosition: pos}, () => {
        player.currentTime = currentTime;
      });

  }

    playTrack(e) {
      let player = document.getElementById('musicplayer');
      let currentTrack = this.props.tracks[e.target.id];
      this.setState({currentTrack, playing: true, cursorPosition: 0}, () => {
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
      button = <img src={window.pause}className="pause" onClick={this.pause}/>
    } else {
      button = <img src={window.play} className="play" onClick={this.play}/>
    }


    if (this.state.currentTrack.title) {
        currentTrackInfo = <div className="playing-track">
          {button}
          <div>
          <h2 className="currentTrack">{this.state.currentTrack.title}</h2>
              <input
                id="the-progress-bar"
                className="progress-bar"
                type="range"
                min="0"
                max="1000"
                step="1"
                value={this.state.cursorPosition}
                onInput={e => this.changeCursorPosition(e)}
                onChange={e => this.changeCursorPosition(e)}
              />
        </div>
        </div>

    } else{
       currentTrackInfo = <div className="playing-track">
        {/* {button} */}
        <h2>Choose a track</h2>
      </div>;
    }

    let trackInfo;
    
    if (this.props.tracks.length) {
      trackInfo = this.props.tracks.map((track, idx) => {
        return (<li className="track" key={idx}>
          <img src={window.play} className="play-button" onClick={this.playTrack} id={idx}/>
          <span className="track-in-list">{idx + 1}. {track.title}</span>
        </li>)
      })
    }

    return (
      <div>
        {currentTrackInfo}
        <ul className="tracks">
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