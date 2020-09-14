class ChangeGenreToArray < ActiveRecord::Migration[5.2]
  def change
    change_column :albums, :genre, :text, array: true, default: [], using: "(string_to_array(genre, ','))"
  end
end
