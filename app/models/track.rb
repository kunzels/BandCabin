# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Track < ApplicationRecord
    validates :title, :album, presence: true
    belongs_to :album, inverse_of: :tracks

    has_one_attached :audio_file
end
