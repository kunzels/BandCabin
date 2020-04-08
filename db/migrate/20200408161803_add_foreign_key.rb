class AddForeignKey < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :album_id, :integer
  end
end
