import React from 'react';

class AlbumShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {album: ""}
    }

    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId)
            .then(album => { this.setState({ album: album.album }) })
    }

    render(){
        return(
            <div className="album-show-container">
                <div className="album-show-left">
                    <div className="album-show-title">{this.state.album.title}</div>
                    <div className="album-show-artist">by {this.state.album.artistName}</div>
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