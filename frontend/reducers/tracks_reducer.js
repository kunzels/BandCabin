import {RECEIVE_ALBUM} from "../actions/album_actions";

const tracksReducer = (state ={}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_ALBUM:
            if (action.payload.tracks) {
                return action.payload.tracks;
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default tracksReducer;