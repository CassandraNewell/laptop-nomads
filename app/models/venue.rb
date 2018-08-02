class Venue < ApplicationRecord
  mount_uploader :photo_url, VenuePhotoUploader
  has_many :reviews
  has_many :review_votes, through: :reviews 

  validates :name, :address, :photo_url, presence: true
end
