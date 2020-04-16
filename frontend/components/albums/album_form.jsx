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
            genre: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const history = this.props.history;
        const album = Object.assign({}, this.state);
        this.props.createAlbum({album:album}, this.props.currentUser.id)
        .then((album) => history.push(`/albums/${album.album.id}`))   
    }
    

    render(){
        
        return(
        <div className="form-background">
            <div className="album-form-container" >
                <form className="album-form" onSubmit={this.handleSubmit}>
                   
                    <div className="left-side-album-create">
                        <div className="square"></div>
                            <div className="album-preview">
                                <div>{this.state.title || "Untitled Album"}</div>
                                <div>by {this.props.currentUser.artist}</div>
                            </div>
                    </div>
                    <div className="right-side-album-input">
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