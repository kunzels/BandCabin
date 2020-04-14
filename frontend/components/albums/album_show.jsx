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
            <div>{this.state.album.title}</div>
        )
    }

}

export default AlbumShow