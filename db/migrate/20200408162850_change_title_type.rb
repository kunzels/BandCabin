class ChangeTitleType < ActiveRecord::Migration[5.2]
  def change
  change_table :albums do |t|
    t.change :title, :string
  end
end
end
