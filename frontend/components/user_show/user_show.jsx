import React from 'react';

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
        // debugger
        return(
            <div>
                <div className="user-bio">
                    <div className="profile-picture-container">
                        <img className ="profile-picture" src={this.state.user.photoURL} alt="profile-picture" />
                    </div>
                    <div className="profile-picture">{this.state.user.username}</div>
                    <div className="user-bio-username">{this.props.currentUser}</div>
                    <div>hey</div>
                </div>
            </div>
        )
    }
}

export default UserShow;
{/* <div>{this.state.user.albums[0].title}</div> */}