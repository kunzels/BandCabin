json.extract! @album, :id, :title, :user_id, :price, :description, :genre
json.photoURL url_for(@album.photo)
json.username @album.user.username
json.artistName @album.user.artist
json.userPhoto url_for(@album.user.photo)
json.albums @album.user.albums
