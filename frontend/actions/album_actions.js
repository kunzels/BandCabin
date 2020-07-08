import * as APIUtil from "../util/album_api_util";

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_NEW_ALBUM = "RECEIVE_NEW_ALBUM";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";

export const receiveAlbums = albums => ({
    type: RECEIVE_ALBUMS,
    albums
});
export const receiveAlbum = payload => ({
    type: RECEIVE_ALBUM,
    payload
});

export const receiveNewAlbum = (payload) => ({
    type: RECEIVE_NEW_ALBUM,
    payload
});

export const receiveErrors = errors => {
    return {type: RECEIVE_ALBUM_ERRORS,
    errors}
};

export const fetchAlbums = () => dispatch => (
    APIUtil.fetchAlbums()
        .then(albums => (dispatch(receiveAlbums(albums))))
)

export const fetchAlbum = id => dispatch => (
    APIUtil.fetchAlbum(id)
        .then(payload => (dispatch(receiveAlbum(payload))))
)

export const createAlbum = (data, userId) => dispatch => (
    APIUtil.createAlbum(data, userId)
        .then(payload => (dispatch(receiveAlbum(payload))
        ), err => {
                return dispatch(receiveErrors(err.responseJSON))
            }
        )
)