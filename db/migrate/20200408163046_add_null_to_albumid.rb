class AddNullToAlbumid < ActiveRecord::Migration[5.2]
  def change
    change_column_null :albums, :album_id, false
  end
end
