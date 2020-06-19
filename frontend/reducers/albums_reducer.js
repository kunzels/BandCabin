import {RECEIVE_ALBUMS, RECEIVE_ALBUM} from "../actions/album_actions";

const albumsReducer = (state ={}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_ALBUMS:
            return action.albums;
        case RECEIVE_ALBUM:
            const newAlbum = {[action.payload.album.id]: action.payload.album};
            return Object.assign({}, state, newAlbum);
        default:
            return state;
    }
};

export default albumsReducer;