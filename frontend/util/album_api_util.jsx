export const fetchAlbums = () => (
    $.ajax({
        method: 'GET',
        url: '/api/albums',
    })
);

export const fetchAlbum = albumId => (
    $.ajax({
        method: 'GET',
        url: `/api/albums/${albumId}`,
    })
);


export const createAlbum = (data, userId) => (
    $.ajax({
        method: 'POST',
        url: `/api/users/${userId}/albums`,
        data
    })
);
