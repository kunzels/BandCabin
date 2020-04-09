class ChangeColInAlbum < ActiveRecord::Migration[5.2]
  def change
    rename_column :albums, :album_id, :user_id
  end
end
