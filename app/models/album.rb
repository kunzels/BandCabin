# == Schema Information
#
# Table name: albums
#
#  id      :bigint           not null, primary key
#  title   :string           not null
#  user_id :integer          not null
#
class Album < ApplicationRecord
validates :title, :user_id, presence: true
belongs_to :user
end
