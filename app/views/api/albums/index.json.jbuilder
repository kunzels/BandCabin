@albums.each do |album|
  json.set! album.id do
    json.partial! 'album', album: album
    json.albumPhoto url_for(album.photo)
  end
end
