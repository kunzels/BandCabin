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
                          
                            <Link to="/albums/new">Create New Album</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserShow;
