json.extract! @user, :id, :username, :email, :artist, :location, :description, :genre
json.photoURL url_for(@user.photo)
json.albums do 
    @user.albums.each do |album|
          json.set! album.id do
            json.extract! album, :id, :title, :user_id, :price, :description, :genre
            json.photoURL url_for(album.photo)
        end
    end
end 