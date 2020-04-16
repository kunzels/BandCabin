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
                    <div>{this.state.album.title}</div>
                    <div>{this.state.album.artistName}</div>
                    <img src={this.state.album.userPhoto} alt=""/>
                </div>
            <img className="profile-picture" src={this.state.album.photoURL} alt="profile-picture" />
            </div>
        )
    }

}

export default AlbumShow