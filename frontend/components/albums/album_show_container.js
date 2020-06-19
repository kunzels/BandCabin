import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/album_actions';
import AlbumShow from './album_show';

const msp = (state, ownProps) => {
    let albumId = ownProps.match.params.albumId;
    return {
        album: state.entities.albums[albumId],
        tracks: Object.values(state.entities.tracks)
    }
};

const mdp = dispatch => ({
    fetchAlbum: id => dispatch(fetchAlbum(id))
});

export default connect(msp, mdp)(AlbumShow);