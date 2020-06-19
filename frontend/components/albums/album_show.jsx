import React from 'react';
import BandcampPlayer from 'react-bandcamp';
import MusicPlayer from '../music_player/music_player';


class AlbumShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {album: null}
    }

    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId)
            .then(() => {
                this.setState({ album: this.props.album });
            })
    }

    render(){
        if (!this.state.album) return null;

        let trackInfo;

        if (this.props.tracks.length) {
            trackInfo = <MusicPlayer tracks={this.props.tracks} />
        }

        return(
            <div className="album-show-container">
                <div className="album-show-left">
                    <div className="album-show-title">{this.state.album.title}</div>
                    <div className="album-show-artist">by {this.state.album.artistName}</div>
                    {trackInfo}
                </div>
                <div>
                    <img className="album-art" src={this.state.album.photoURL} alt="profile-picture" />
                </div>
                <div className="album-show-right">
                    <img className="album-show-profile" src={this.state.album.userPhoto} alt=""/>
                    <div className="album-show-under-profile">
                        <div className="album-show-artist">{this.state.album.artistName}</div>
                        <div className="album-show-location">{this.state.album.location}</div>
                        <br/>
                        <div className="album-show-description">{this.state.album.description}</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default AlbumShow