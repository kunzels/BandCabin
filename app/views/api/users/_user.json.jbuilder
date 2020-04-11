json.extract! user, :id, :username, :email, :artist, :albums
json.photoURL url_for(user.photo)