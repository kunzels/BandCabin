import {connect} from 'react-redux';
import {createAlbum} from '../../actions/album_actions'
import AlbumForm from "./album_form"
import {withRouter} from 'react-router-dom';

const msp = ({session, entities: {users}}) => {
    return {
        currentUser: users[session.id]
    }
}

const mdp = dispatch => ({
    createAlbum: (data, userId) => dispatch(createAlbum(data, userId))
})

export default withRouter(connect(msp, mdp)(AlbumForm));