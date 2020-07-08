import { RECEIVE_ALBUMS, RECEIVE_ALBUM, RECEIVE_ALBUM_ERRORS} from '../actions/album_actions';
import { RECEIVE_USER } from '../actions/user_actions'
import { LOGOUT_CURRENT_USER } from '../actions/session_actions'

export default (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALBUM_ERRORS:
            return action.errors[0];
        case RECEIVE_ALBUM:
            return [];
        case RECEIVE_ALBUMS:
            return [];
        case RECEIVE_USER:
            return [];
        case LOGOUT_CURRENT_USER:
            return [];
        default:
            return oldState;
    }
};
