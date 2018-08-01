class Venue < ApplicationRecord
  has_many :reviews
  has_many :review_votes, through: :reviews 

  validates :name, :address, :photo_url, presence: true
end
