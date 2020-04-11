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
        
        return(
            <div>
            <div>{this.state.user.username}</div>
            <div>{this.state.user.albums}</div>
            <div>{this.props.currentUser}</div>
            <div>hey</div>
            </div>
        )
    }
}

export default UserShow;