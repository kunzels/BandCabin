json.album do
  json.partial! 'api/albums/album', album: @album
end

if @album.tracks.length > 0
  json.tracks do
    @album.tracks.each do |track|
      json.set! track.id do
        json.partial! 'api/tracks/track', track: track
      end
    end
  end
else
  json.tracks {}
end