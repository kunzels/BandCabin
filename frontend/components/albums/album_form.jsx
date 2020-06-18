import React from 'react';
import { Redirect } from 'react-router-dom';

class AlbumForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            user_id: this.props.currentUser.id,
            price: 0,
            description: '',
            genre: '',
            imageUrl: null,
            imageFile: null,
            track_attributes: [],
            audioFile: null,
            trackTitle: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleAudioFile = this.handleAudioFile.bind(this);
        this.updateTrackTitle = this.updateTrackTitle.bind(this);
        this.addTrack = this.addTrack.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleFile(e){
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ imageUrl: reader.result, imageFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('album[title]', this.state.title);
        formData.append('album[genre]', this.state.genre);
        formData.append('album[price]', this.state.price); 
        formData.append('album[description]', this.state.description); 
        if (this.state.imageFile) {
            formData.append('album[photo]', this.state.imageFile);
        }
        this.state.track_attributes.forEach((track) => {
            formData.append('album[tracks_attributes][][title]', track.title);
            formData.append('album[tracks_attributes][][audio_file]', track.audio_file);
        });

        const history = this.props.history;
        this.props.createAlbum(formData)
        .then((album) => {
            debugger;
            history.push(`/albums/${album.album.id}`)
        })   
    }

    handleAudioFile(e) {
        e.preventDefault();
        this.setState({
            audioFile: e.target.files[0]
        });
    }

    updateTrackTitle(e){
        e.preventDefault();
        this.setState({
            trackTitle: e.target.value
        });
    }

    addTrack(e){
        e.preventDefault();
        const newTrack = {
            title: this.state.trackTitle,
            audio_file: this.state.audioFile
        }
        let tracks = this.state.track_attributes.concat(newTrack);
        this.setState({
            track_attributes: tracks, 
            trackTitle: "",
            audioFile: null
        });
    }
  
    render(){

        let imagePreview;
        if(this.state.imageUrl){
            imagePreview = <img src={this.state.imageUrl} className="square" alt=""/>
        }
        let trackTitle;
        if(this.state.audioFile){
            trackTitle = <div>
                            <input type="text" value={this.state.trackTitle} onChange={this.updateTrackTitle}/>
                            <button onClick={this.addTrack}>Add Track</button>
                        </div>

        }
        let addedTracks;
        if(this.state.track_attributes.length){
            addedTracks = this.state.track_attributes.map(track => {
                return(
                    <li>{track.title}</li>
                )
            })
        }

        return(
        <div className="form-background">
            <div className="album-form-container" >
                <form className="album-form" onSubmit={this.handleSubmit}>
                   
                    <div className="left-side-album-create">
                        <div className="left-side-top">
                            <div className="square">{imagePreview}</div>
                            <div className="album-preview">
                                <div>{this.state.title || "Untitled Album"}</div>
                                <div>by {this.props.currentUser.artist}</div>
                            </div>
                        </div>
                        <div className="left-side-bottom">
                            <input type="file" onChange={this.handleAudioFile} />
                            {trackTitle}
                            <ul>
                                {addedTracks}
                            </ul>
                        </div>
                    </div>
                    <div className="right-side-album-input">
                        <div>Choose Album Art</div>
                            <div className="image-input">
                                <input type="file" onChange={this.handleFile} />
                            </div>
                        <div className="album-input">
                            <label htmlFor="title">album title</label>
                            <input id="title" type="text" value={this.state.title} onChange={this.update('title')} />
                        </div>
                        <br />
                            <div className="album-input">
                                <label htmlFor="genre">genre</label>
                                <input id="genre" type="text" value={this.state.genre} onChange={this.update('genre')} />
                            </div>
                        <br />
                        <div className="album-input">
                            <label htmlFor="price">price</label>
                            <input id="price" type="text" value={this.state.price} onChange={this.update('price')} />
                        </div>
                        <br />
                            <div className="album-input">
                                <label className="description-input" htmlFor="description">description</label>
                                <input id="description" type="text" value={this.state.description} onChange={this.update('description')} />
                            </div>
                        <br />
                        <input className="form-submit-button" type="submit"/>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

export default AlbumForm;