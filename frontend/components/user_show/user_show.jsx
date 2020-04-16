import React from 'react';
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
    
    
    render(){
        debugger
        if (typeof this.state.user.albums === "undefined"){
            return (<div></div>)
        }

          const albumTitles = Object.values(this.state.user.albums).map(album => {
              return <div><img className="profile-picture" src={album.photoURL} alt="profile-picture" /><Link to={`/albums/${album.id}`}><li>{album.title}</li></Link></div>
          })

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
                            <div className="user-bio-grey">Location: {this.state.user.location}</div>
                            <div className="user-bio-grey">Genre: {this.state.user.genre}</div>
                            <div className="user-bio-description">Description: {this.state.user.description}</div>

                            <div className="Album-create-link-high">
                            <Link to="/albums/new" className="album-create-link">Create New Album</Link>
                            </div>
                            <div>Discograpy: ({Object.values(this.state.user.albums).length})</div>
                            <ul>
                                {albumTitles}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserShow;
