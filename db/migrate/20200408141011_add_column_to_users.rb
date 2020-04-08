class AddColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :artist, :string
    add_index :users, :artist, unique: true
  end
end
