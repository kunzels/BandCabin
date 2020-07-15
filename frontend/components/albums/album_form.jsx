import React from 'react';
import { Redirect } from 'react-router-dom';

class AlbumForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            user_id: this.props.currentUser.id,
            price: '',
            description: '',
            genre: '',
            imageUrl: null,
            imageFile: null,
            track_attributes: [],
            audioFile: null,
            trackTitle: "Track Title"
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
        .then((data) => {
            history.push(`/albums/${data.payload.album.id}`)
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
            trackTitle = <div className="track-title">
                            <input className="track-text" type="text" value={this.state.trackTitle} onChange={this.updateTrackTitle}/>
                            <button onClick={this.addTrack}>Add Track</button>
                        </div>

        }
        let addedTracks;
        if(this.state.track_attributes.length){
            addedTracks = this.state.track_attributes.map((track, idx) => {
                return(
                    <li key={idx}>{track.title}</li>
                )
            })
        }

        let titleError, genreError, priceError, descriptionError;
        if (this.props.errors.title) {
            titleError = this.props.errors.title;
        } 
        if (this.props.errors.genre) {
            genreError = this.props.errors.genre;
        } 
        if (this.props.errors.price) {
            priceError = this.props.errors.price;
        } 
        if (this.props.errors.description) {
            descriptionError = this.props.errors.description;
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
                            <div className="list-text">Add Tracks Below</div>
                    
                            <input className="choose-file" type="file" onChange={this.handleAudioFile} />
                            {trackTitle}
                            <ul className="added-tracks">
                                {addedTracks}
                            </ul>
                        </div>
                    </div>
                    <div className="right-side-album-input">
                        <div className="album-art-text">Choose Album Art</div>
                            <div className="image-input">
                                <input type="file" onChange={this.handleFile} />
                            </div>
                        <div className="album-input">
                            <label htmlFor="title">Album Title</label>
                                <span className="form-error-t">{titleError}</span>
                            <input id="title" type="text" value={this.state.title} onChange={this.update('title')} />
                        </div>
                        <br />
                            <div className="album-input">
                                <label htmlFor="genre">Genre</label>
                                <span className="form-error-g">{genreError}</span>
                                <input id="genre" type="text" value={this.state.genre} onChange={this.update('genre')} />
                            </div>
                        <br />
                        <div className="album-input">
                            <label htmlFor="price">Price</label>
                                <span className="form-error-p">{priceError}</span>
                            <input id="price" type="text" value={this.state.price} onChange={this.update('price')} />
                        </div>
                        <br />
                            <div className="album-input">
                                <label className="description-input" htmlFor="description">Description</label>
                                <span className="form-error-d">{descriptionError}</span>
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