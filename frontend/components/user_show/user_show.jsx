import React, { useDebugValue } from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {user: ""}
    }
    
    componentDidMount () {
        this.props.fetchUser(this.props.match.params.userId)
        .then(user => {this.setState({user: user.user})})

    }
    
    // First render is for no albums, second is for albums. Make more dry later // 
    render(){
        let button;
        if(this.state.user === this.props.currentUser){
            button = <div className="Album-create-link-high">
                <Link to="/albums/new" className="album-create-link">Create New Album</Link>
            </div>
        } else {
            button = <div></div>
        }
        if (typeof this.state.user.albums === "undefined"){
            return (
                <div>
                    <div className="user-bio">
                        <div className="profile-picture-container">
                            <img className="profile-picture" src={this.state.user.photoURL} alt="profile-picture" />
                        </div>
                        <div className="bio">
                            <div className="user-bio-username">{this.state.user.username}</div>
                            <br /><br />
                            <div className="below-username">
                                <br /><br />
                                <div className="user-bio-location">Location: {this.state.user.location}</div>
                                <div className="user-bio-genre">Genre: {this.state.user.genre}</div>
                                <div className="user-bio-description">{this.state.user.description}</div>

                                {button}
                            </div>
                        </div>
                    </div>
                </div>

            )
        }

          const albumTitles = Object.values(this.state.user.albums).map(album => {
              return <div key={album.id}><Link to={`/albums/${album.id}`} className="album-link"><img className="profile-picture" src={album.photoURL} alt="profile-picture" /><div>{album.title}</div></Link></div>
          })
          let test;

          
       
        return(
            <div>
                <div className="user-bio">
                    <div className="profile-picture-container">
                        <img className ="profile-picture" src={this.state.user.photoURL} alt="profile-picture" />
                    </div>
                    <div className="bio">
                        <div className="user-bio-username">{this.state.user.username}</div>
        <br/><br/>
                        <div className="below-username">
        <br/><br/>
                            <div className="user-bio-location">Location: {this.state.user.location}</div>
                            <div className="user-bio-genre">Genre: {this.state.user.genre}</div>
                            <div className="user-bio-description">{this.state.user.description}</div>

                            {button}
                            <div className="discover-container">
                                <div className="discover">Discography ({Object.values(this.state.user.albums).length}) :</div>
                                    <div className="wrapper">
                                        {albumTitles}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserShow;
