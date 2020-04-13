import * as APIUtil from "../util/album_api_util";

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_NEW_ALBUM = "RECEIVE_NEW_ALBUM";

export const receiveAlbums = albums => ({
    type: RECEIVE_ALBUMS,
    albums
})
export const receiveAlbum = album => ({
    type: RECEIVE_ALBUM,
    album
})

export const receiveNewAlbum = (album) => ({
    type: RECEIVE_NEW_ALBUM,
    album
})

export const fetchAlbums = () => dispatch => (
    APIUtil.fetchAlbums()
        .then(albums => (dispatch(receiveAlbums(albums))))
)

export const fetchAlbum = id => dispatch => (
    APIUtil.fetchAlbum(id)
        .then(album => (dispatch(receiveAlbum(album))))
)

export const createAlbum = (data, userId) => dispatch => (
    APIUtil.createAlbum(data, userId)
        .then(album => (dispatch(receiveNewAlbum(album))))
)