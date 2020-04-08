class AddForeignKey2 < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :albums, :users, column: :album_id
  end
end
