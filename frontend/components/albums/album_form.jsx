import React from 'react';

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
    }

    render(){
        return(
            <div>hey</div>
        )
    }
}

export default AlbumForm;