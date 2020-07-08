import { RECEIVE_ALBUMS, RECEIVE_ALBUM, RECEIVE_ALBUM_ERRORS} from '../actions/album_actions';

export default (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALBUM_ERRORS:
            return action.errors[0];
        case RECEIVE_ALBUM:
            return [];
        case RECEIVE_ALBUMS:
            return [];
        default:
            return oldState;
    }
};
