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


export const createAlbum = (data) => {
    return $.ajax({
        method: 'POST',
        url: `/api/albums`,
        data,
        processData: false,
        contentType: false
    })
};
