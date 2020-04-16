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
            <div>
            <div>{this.state.album.title}</div>
            <img className="profile-picture" src={this.state.album.photoURL} alt="profile-picture" />
            </div>
        )
    }

}

export default AlbumShow