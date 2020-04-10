import * as APIUtil from "../util/album_api_util";

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";

export const receiveAlbums = albums => ({
    type: RECEIVE_ALBUMS,
    albums
})
export const receiveAlbum = album => ({
    type: RECEIVE_ALBUM,
    album
})

export const fetchAlbums = () => dispatch => (
    APIUtil.fetchAlbums()
        .then(albums => (dispatch(receiveAlbums(albums))))
)

export const fetchAlbum = id => dispatch => (
    APIUtil.fetchAlbum(id)
        .then(bench => (dispatch(receiveAlbum(bench))))
)

export const createAlbum = album => dispatch => (
    APIUtil.createAlbum(album)
        .then(album => (dispatch(receiveAlbum(album))))
)