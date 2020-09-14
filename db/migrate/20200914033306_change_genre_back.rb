class ChangeGenreBack < ActiveRecord::Migration[5.2]
  def change
    change_column :albums, :genre, :text
  end
end
