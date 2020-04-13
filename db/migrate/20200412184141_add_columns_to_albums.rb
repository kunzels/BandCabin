class AddColumnsToAlbums < ActiveRecord::Migration[5.2]
  def change
     add_column :albums, :price, :integer
     add_column :albums, :description, :string
     add_column :albums, :genre, :string
  end
  add_index :albums, :title
  add_index :albums, :user_id
end