json.extract! user, :id, :username, :email, :artist, :albums, :location, :description, :genre
json.photoURL url_for(user.photo)