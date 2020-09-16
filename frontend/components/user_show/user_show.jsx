import React, { useDebugValue } from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user: "",
            location: "",
            id: "",
            genre: "",
            description: "",
            editing: false
        }

        this.editUser = this.editUser.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.update = this.update.bind(this);
        this.cancelUpdate = this.cancelUpdate.bind(this);
    }

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    }
    
    componentDidMount () {
        this.props.fetchUser(this.props.match.params.userId)
        .then(user => {this.setState({user: user.user, location: user.user.location, genre: user.user.genre, description: user.user.description, id: user.user.id})})
    }

    handleUpdate(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state, { id: this.state.id });
        this.props.updateUser(user);
        this.setState({ editing: false });
    }

    editUser(e){
        this.setState({editing: !this.state.editing})
    }

    cancelUpdate(e){
        this.props.fetchUser(this.props.match.params.userId)
            .then(user => { this.setState({ editing: false, user: user.user, location: user.user.location, genre: user.user.genre, description: user.user.description, id: user.user.id }) })
    }
    
    // First render is for no albums, second is for albums. Make more dry later // 
    render(){
        let button;
        let editButton;
        let submitButton;
        let cancelButton;
        let currentUserId;
        if(this.props.currentUser === undefined){
            currentUserId = false;
        } else{
            currentUserId = this.props.currentUser.id
        }

        if(this.state.user.id === currentUserId){
            button = <div className="Album-create-link-high">
                <Link to="/albums/new" className="album-create-link">Create New Album</Link>
            </div>
            editButton = <div className="Album-create-link-high">
                <div className="user-edit-link" onClick={this.editUser}>Edit Information</div>
            </div>
            submitButton = <div className="Album-create-link-high">
                <div className="user-edit-link" onClick={this.handleUpdate}>Submit Edit</div>
            </div>
            cancelButton = <div className="Album-create-link-high">
                <div className="user-edit-link" onClick={this.cancelUpdate}>Cancel Edit</div>
            </div>
        } else {
            button = <div></div>
            editButton = <div></div>
            submitButton = <div></div>
            cancelButton = <div></div>
        }

        // if (typeof this.state.user.albums === "undefined"){
        //     return (
        //         <div>
        //             <div className="user-bio">
        //                 <div className="profile-picture-container">
        //                     <img className="profile-picture" src={this.state.user.photoURL} alt="profile-picture" />
        //                 </div>
        //                 <div className="bio">
        //                     <div className="user-bio-username">{this.state.user.username}</div>
        //                     <br /><br />
        //                     <div className="below-username">
        //                         <br /><br />
        //                         <div className="user-bio-location">Location: {this.state.location}</div>
        //                         <div className="user-bio-genre">Genre: {this.state.genre}</div>
        //                         <div className="user-bio-description">{this.state.description}</div>
        //                         <div className="user-config-buttons">
        //                             {button}
        //                             {editButton}
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //     )
        // }

        let albumTitles;

        if (typeof this.state.user.albums !== "undefined"){
          albumTitles = Object.values(this.state.user.albums).map(album => {
              return <div key={album.id}><Link to={`/albums/${album.id}`} className="album-link"><img className="profile-picture" src={album.photoURL} alt="profile-picture" /><div>{album.title}</div></Link></div>
          })

        } else{
            albumTitles = <div></div>
        }
        let page;

        if(this.state.editing === false){
        page = <div className="user-bio">
                  <div className="profile-picture-container">
                      <img className="profile-picture" src={this.state.user.photoURL} alt="profile-picture" />
                  </div>
                  <div className="bio">
                      <div className="user-bio-username">{this.state.user.username}</div>
                      <br /><br />
                      <div className="below-username">
                          <br /><br />
                          <div className="user-bio-location">Location: {this.state.location}</div>
                          <div className="user-bio-genre">Genre: {this.state.genre}</div>
                          <div className="user-bio-description">{this.state.description}</div>

                            <div className="user-config-buttons">
                                {button}
                                {editButton}
                            </div>
                          <div className="discover-container">
                        <div className="discover">Discography:</div>
                              <div className="wrapper">
                                  {albumTitles}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          } else {
        page = <div className="user-bio">
                  <div className="profile-picture-container">
                      <img className="profile-picture" src={this.state.user.photoURL} alt="profile-picture" />
                  </div>
                  <div className="bio">
                      <div className="user-bio-username">{this.state.user.username}</div>
                      <br /><br />
                      <div className="below-username">
                          <br /><br />
                    <input className="user-bio-location-edit" value={this.state.location} onChange={this.update('location')}></input>
                    <input className="user-bio-genre-edit" value={this.state.genre} onChange={this.update('genre')}></input>
                    <textarea className="user-bio-description-edit"  value={this.state.description} onChange={this.update('description')}></textarea>
                            <div className="user-config-buttons-edit">
                                {cancelButton}
                                {submitButton}
                            </div>
                          <div className="discover-container">
                        <div className="discover">Discography:</div>
                              <div className="wrapper">
                                  {albumTitles}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          }

          
       
        return(
            <div>
                {page}
            </div>
        )
    }
}

export default UserShow;
