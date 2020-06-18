# == Schema Information
#
# Table name: albums
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  user_id     :integer          not null
#  price       :integer
#  description :string
#  genre       :string
#
class Album < ApplicationRecord
  validates :title, :user_id, presence: true
  belongs_to :user
  has_many :tracks, inverse_of: :album
  has_one_attached :photo
  after_initialize :ensure_photo
  accepts_nested_attributes_for :tracks, :reject_if => :all_blank, :allow_destroy => true

  def ensure_photo 
    if self.photo.attached? == false
      self.photo.attach(io: open("app/assets/images/defuser.png"), filename: "defuser.png")
    end
  end

end
