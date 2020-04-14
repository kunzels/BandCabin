import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/album_actions';
import AlbumShow from './album_show';

// const msp = (state, ownProps) => {
//     // const user = state.entities.users[ownProps.match.params.userId];
//     return{
//         user,
//         currentUser: state.session.currentUser
//     };
// };

const mdp = dispatch => ({
    fetchAlbum: id => dispatch(fetchAlbum(id))
});

export default connect(null, mdp)(AlbumShow);