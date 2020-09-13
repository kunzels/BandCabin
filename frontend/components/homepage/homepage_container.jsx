import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';
import Homepage from "./homepage";

const msp = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id],
    }
}

const mdp = dispatch => ({
    fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(msp, mdp)(Homepage);