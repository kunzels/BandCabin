json.extract! track, :id, :title, :album_id
json.trackUrl url_for(track.audio_file)